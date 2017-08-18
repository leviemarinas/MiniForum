var router = require('express').Router();
var db = require('../../../lib/database')();

var authMiddleware = require('../middlewares/auth')

router.get('/',authMiddleware.isAdmin ,(req, res) => {
    db.query('SELECT * FROM tblcategories', (err, results, fields) => {
        return res.render('admin/category/views/index', { categories: results });
    });
});

router.post('/', (req, res) => {
    var queryString = `INSERT INTO \`tblcategories\` (\`strCategoryName\`)
    VALUES("${req.body.name}");`;

    db.query(queryString, (err, results, fields) => {
        if (err) throw err;
        return res.redirect('/admin/category');
    });
});

router.get('/new',authMiddleware.isAdmin , (req, res) => {
    res.render('admin/category/views/form');
});

router.get('/:intCategoryId',authMiddleware.isAdmin , (req, res) => {
    db.query(`SELECT * FROM tblcategories WHERE intCategoryId=${req.params.intCategoryId}`, (err, results, fields) => {
        if (err) throw err;
        res.render('admin/category/views/form', { category: results[0] });
    });
});

router.put('/:intCategoryId',authMiddleware.isAdmin , (req, res) => {
    const queryString = `UPDATE tblCategories SET
    strCategoryName = "${req.body.name}"
    WHERE intCategoryId=${req.params.intCategoryId}`;

    db.query(queryString, (err, results, fields) => {
        if (err) throw err;
        res.redirect('/admin/category');
    });
});

router.get('/:intCategoryId/remove',authMiddleware.isAdmin , (req, res) => {
    db.query(`DELETE FROM tblcategories WHERE intCategoryId=${req.params.intCategoryId}`, (err, results, fields) => {
        if (err) throw err;
        res.redirect('/admin/category');
    });
});

module.exports = router;