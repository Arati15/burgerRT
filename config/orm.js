// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    all:function(tableInput, cb){
        connection.query('SELECT * FROM ' + tableInput + ';', (err, result) => {
            if (err) throw err
            cb(result);
        });
    },
    //insert one row
    create:function(table,vals, cb){
        connection.query('INSERT INTO ' + table + ' SET ?;',vals, (err, result) => {
            if (err) throw err;
            cb(result);
        })

    },
    //update one row
    update: function (table, vals, id, cb){
        connection.query('UPDATE '+ table +' SET ? WHERE id= ?;', [vals, id], (err, result) =>{
            if (err) throw err;
            cb(result);
        })
    }

};

module.exports = orm;