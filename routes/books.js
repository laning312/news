var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: 'root',
    password: "mysql",
    database: 'books'
});

connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query("select * from booktest_bookinfo", (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.json({
                status: 200,
                result: result
            });
        }
    });
});

router.post('/ins', (req, res, next) => {
    let params = [req.body.title, req.body.author, req.body.price];
    console.log(params);
    connection.query("insert into booktest_bookinfo values(null,?,?,?)", params, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.json({
                status: 200,
                result: result
            });
        }
    });
})


router.delete('/:id', function(req, res, next) {
    console.log(req.params.id);
    connection.query("delete from booktest_bookinfo where id=?", [req.params.id], (err, result) => {
        if(err){
            // console.log(err);
            res.json({
                status: 500,
                result: err
            })
        }else{
            res.json({
                status: 900,
                result: result
            });
        }
    });
});

module.exports = router;
