exports.isAdmin = (req,res,next) => {
    if(req.session.user.strUserType === 'ADMIN') return next();
    return res.redirect('/?admin');
}

exports.isUser = (req,res,next) => {
    var db = require('../../../lib/database')();
    db.query(`SELECT * FROM tblpost WHERE intPostId=${req.params.intPostId}`,(err,results,field)=>{
    var check = results[0];
    for(var x = 0;x<results.length;x++)
            console.log(results[x]);
    if(req.session.user.intId === check.intAuthorId) return next();
    return res.redirect('/');

    });
}