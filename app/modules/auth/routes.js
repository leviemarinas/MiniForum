var express = require('express');
var loginRouter = express.Router();
var logoutRouter = express.Router();
var signupRouter = express.Router();
var settingRouter = express.Router();

var authMiddleware = require('./middlewares/auth');

loginRouter.route('/')
    .get(authMiddleware.noAuthed, (req, res) => {
        res.render('auth/views/login', req.query);
    })
    .post((req, res) => {
        var db = require('../../lib/database')();

        db.query(`SELECT * FROM tbluser WHERE strUsername="${req.body.strUsername}"`, (err, results, fields) => {
            if (err) throw err;
            if (results.length === 0) return res.redirect('/login?incorrect');

            var user = results[0];

            for(var x = 0;x<results.length;x++)
                console.log(results[x]);

            if (user.strPassword !== req.body.strPassword) return res.redirect('/login?incorrect');

            delete user.strPassword;

            req.session.user = user;

            return res.redirect('/');
        });
    });

logoutRouter.get('/', (req, res) => {
    req.session.destroy(err => {
        if (err) throw err;
        res.redirect('/login');
    });
});

signupRouter.route('/')
    .get(authMiddleware.noAuthed,(req,res) =>{
        res.render('auth/views/signup');
    })
    .post((req,res) => {
        var db = require('../../lib/database')();

        var querystring=`INSERT INTO tbluser (strUsername,strPassword,strEmail,dtmBdate,strUserType) 
        VALUES ("${req.body.username}","${req.body.password}","${req.body.email}","${req.body.date}","${req.body.usertype}")`;

        db.query(querystring,(err,results,fields) => {
            if(err) throw err;
            return res.redirect('/login');
        });
    });
settingRouter.route('/')
    .get(authMiddleware.hasAuth,(req,res)=>{
        var db = require('../../lib/database')();
        db.query(`SELECT * FROM tbluser WHERE intId = ${req.session.user.intId}`,(err,results,fields)=>{
        return res.render('auth/views/setting',{users : results});

        });
    })

exports.login = loginRouter;
exports.logout = logoutRouter;
exports.signup = signupRouter;
exports.settings = settingRouter;