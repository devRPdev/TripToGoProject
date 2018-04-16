// Retrieve
const MongoClient = require('mongodb').MongoClient;

module.exports.isUserValid = function (name, pass) {
    return new Promise((resolve) => {
        let isExists = false;
        if (name && pass) {
            getAllUsersFromDB(function (result) {
                if (result && Array.isArray(result) && result.length > 0) {
                    result.map((user) => {
                        if (user && user.username && user.username === name && user.password && user.password === pass) {
                            isExists = true;
                        }
                    });
                }
                resolve(isExists);
            })
        }
        else {
            resolve(isExists);
        }
    });
};

module.exports.getAllUsers = function () {
    return new Promise((resolve, reject) => {
        getAllUsersFromDB(function (result) {
            //printAllUsernames(result);
            if (result && Array.isArray(result) && result.length > 0) {
                resolve(result);
            }
            else {
                resolve([]);
            }
        })
    });
};

function getAllUsersFromDB(callbackFunc) {
    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/", function (err, db) {
        if (err) {
            console.error(err);
            callbackFunc([]);
        }
        else {

            let dbname = db.db('TripToGo');
            let usr = dbname.collection('users');
            let uCursor = usr.find({});
            let allUsers = [];
            uCursor.on('data', function (doc) {
                //console.log('new document: ', doc);
                if (doc.id && doc.username && doc.password) {
                    allUsers.push(doc);
                }
            });

            uCursor.on('end', function () {
                // Close the cursor a.
                uCursor.close();
                db.close();
                callbackFunc(allUsers);
            });
        }
    });
}

function printAllUsernames(users) {
    if (users && Array.isArray(users) && users.length > 0) {
        console.log("Only usernames:");
        users.map((user) => {
            if (user && user.username) {
                console.log(user.username);
            }
        });
    }
    else {
        console.log("No results.");
    }
}
