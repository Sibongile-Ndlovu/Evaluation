var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');

//registering a user
router.post('/register',  function(req,res,next){
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    password: User.hashPassword(req.body.password),
    creation_dt: Date.now()
  });

  let promise = user.save();

  promise.then(function(doc){
    return res.status(201).json(doc);
  })

  promise.catch(function(err){
    return res.status(501).json({message: 'Error registering user.'})
  })
})

//find user with email from angular code
router.post('/login', function(req,res,next){
   let promise = User.findOne({email:req.body.email}).exec();
  //on success
   promise.then(function(doc){
    if(doc) {
      console.log(doc);
      if(doc.isValid(req.body.password)){
          // generate token
          let token = jwt.sign({name:doc.name},'secret', {expiresIn : '3h'});

          return res.status(200).json(token);
  //on error
    } else {
      //passwords do not match
      return res.status(501).json({message:' Invalid Credentials'});
      }
    }
    else {
      //user did not register
      return res.status(501).json({message:'User email is not registered.'})
    }
   });

   promise.catch(function(err){
     return res.status(501).json({message:'Some internal error'});
   })
})


//verify dashboard if token is valid //trying to fetch name from route
router.get('/name', verifyToken, function(req,res,next){
  return res.status(200).json(decodedToken.name);
})

var decodedToken='';
//calls function only if token is verified
function verifyToken(req,res,next){
  let token = req.query.token;

  jwt.verify(token,'secret', function(err, tokendata){
    if(err){
      return res.status(400).json({message:' Unauthorized request'});
    }
    if(tokendata){
      decodedToken = tokendata;
      next();
    }
  })
}

module.exports = router;