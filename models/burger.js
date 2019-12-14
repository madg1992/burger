/*
-Inside your burger directory, create a folder named models.
-In models, make a burger.js file.
-Inside burger.js, import orm.js into burger.js
-Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

-Export at the end of the burger.js file.
*/


// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
        //   },
        //   delete: function(condition, cb) {
        //     orm.delete("cats", condition, function(res) {
        //       cb(res);
        //     });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
