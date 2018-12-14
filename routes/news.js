var express = require('express');
var router = express.Router();
var connection = require('../routes/db');


/* GET home page. */
router.get('/', function(req, res, next) {
    var sql = "select * from category";
    connection.query(sql, (err, result) => {
        // console.log(result);
        res.json(result);
    });
});

router.get('/:cname', function(req, res, next) {
    var t = {top: '头条', junshi: '军事', shishang: '时尚', shehui: '社会', yule: '娱乐', tiyu: '体育', 
    guonei: '国内', keji: '科技', caijing: '财经'};
    var sql = "select title, thumbnail_pic_s, author_name, date_format(date, '%Y年%m月%d日') date from newsinfo where category=?";
    connection.query(sql, [t[req.params.cname]], (err, result) => {
        // console.log(result);
        res.json(result);
    });
});

module.exports = router;