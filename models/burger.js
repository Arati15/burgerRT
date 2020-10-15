// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm');



// const burger = {
//     all: cb => {
//         orm.all('burgers', cb);
//     },
//     create: (burgerObj, cb) => {
//         orm.create('burgers',burgerObj, cb);
//     },
//     update: (changeBur,id, cb) => {
//         orm.update('burgers', changeBur,id,cb);
//     }
// }

module.exports = burger;