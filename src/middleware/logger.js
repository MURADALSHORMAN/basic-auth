

'use strict';
module.exports=(req,res,next)=>{
    console.log('__request__',req.method,req.path);
    next();
}