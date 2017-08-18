var express = require('express');
var moment = require('moment');
var db = require('../../lib/database')();
var authMiddleware = require('../auth/middlewares/auth');
var moment = require('moment');
var authMiddleware2 = require('../admin/middlewares/auth');


var postRouter = express.Router();

postRouter.get('/',authMiddleware.hasAuth,(req,res) => {
        db.query('SELECT * FROM tblcategories',(err,results,field)=>{
            return res.render('user/views/new',{categories : results});

        });
    });
postRouter.post('/',(req,res) => {
        var date = moment().format('YYYY-MM-D');
        var querystring=`INSERT INTO tblpost (intAuthorId,intPCategoryId,strPostTitle,strPostContent,dtmPostDate) VALUES
        ('${req.session.user.intId}',${req.body.category},'${req.body.title}','${req.body.content}','${date}')`;
        
        db.query(querystring,(err,results,fields) => {
            if(err) throw err;
            return res.redirect('/index');
        });
    });
postRouter.get('/:intCategoryId',authMiddleware.hasAuth,(req,res) => {
        db.query(`SELECT * FROM tblpost INNER JOIN tblcategories ON intPCategoryId = intCategoryId WHERE intPCategoryId=${req.params.intCategoryId}`,(err,results,field)=>{
            console.log(results);
            return res.render('user/views/category',{posts : results});
        });
    });
postRouter.get('/:intCategoryId/:intPostId',authMiddleware.hasAuth,(req,res) =>{
        db.query(`SELECT * FROM tblpost INNER JOIN tblcategories ON intPCategoryId = intCategoryId INNER JOIN tbluser ON intAuthorId = intId WHERE intPcategoryId=${req.params.intCategoryId}`,(err,results,field)=>{
            console.log(results);
            return res.render('user/views/post',{posts : results});
        });
    });
postRouter.get('/:intCategoryId/:intPostId/edit',authMiddleware.hasAuth,authMiddleware2.isUser,(req,res)=>{
        db.query(`SELECT * FROM tblpost INNER JOIN tblcategories ON intPCategoryId = intCategoryId INNER JOIN tbluser ON intAuthorId = intId WHERE intPcategoryId=${req.params.intCategoryId}`,(err,results,field)=>{
            console.log(results);
            return res.render('user/views/edit',{posts : results});
        });
    });
postRouter.post('/:intCategoryid/:intPostId/edit',(req,res)=>{
        var date = moment().format('YYYY-MM-D');
        db.query(`UPDATE tblpost SET intPCategoryId = "${req.body.category}",strPostTitle = "${req.body.title}",strPostContent = "${req.body.content}",dtmPostDate = "${date}"
        WHERE intPostId = ${req.params.intPostId}`,(err,results,field)=>{
            if(err) throw err;
            res.redirect('/');
        });
    });

postRouter.get('/:intCategoryId/:intPostId/remove',authMiddleware.hasAuth,authMiddleware2.isUser,(req,res)=>{
        db.query(`DELETE FROM tblpost WHERE intPostId = ${req.params.intPostId}`,(err,results,field)=>{
            if(err) throw err;
            res.redirect('/post/:intCategoryId');
        });
    });


exports.post = postRouter;