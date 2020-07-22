var express = require("express");

var router = express.Router();
const burger = require('../models/burger.js');


// Create all our routes and set up logic within those routes where required.

router.get('/', (req, res) => {
     burger.all(result => {
        // res.json(result);
        res.render('index', {burgers: result})
    });

    //res.render("index");
});
  
  router.post('/api/burgers', (req, res) => {
    burger.create(req.body, result => {
        res.json({id: result.insertId})
    });
});

//Update
router.put('/api/burgers/:id', (req,res) => {
    burger.update(req.body, req.params.id, result => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});


// Export routes for server.js to use.
module.exports = router;
