'use strict';

const http = require('http');
const path = require('path');
const Express = require('express');
const React = require('react');
const ReactDomServer = require('react-dom/server');
const ReactRouter = require('react-router');
const bodyParser = require('body-parser');
const routes = require('../src/routes');
import NotFoundPage from '../src/components/NotFoundPage';
const myDB = require('./DB/DB');

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new http.Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, '../src/static')));

// handler for the /user/:id path, which prints the user ID
app.get('/allUsers', function (req, res, next) {
    myDB.getAllUsers()
        .then((data)=> {
            res.send(data);
        });
});

app.post('/isUserValid', function (req, res) {
    myDB.isUserValid(req.body.name, req.body.pass)
        .then((data)=> {
            res.json({isValid: data});
        });
});

// universal routing and rendering
app.get('*', (req, res) => {
  ReactRouter.match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = ReactDomServer.renderToString(<ReactRouter.RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = ReactDomServer.renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
