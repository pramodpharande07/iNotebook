//this file is authentication file

const express = require('express')
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require("jsonwebtoken");
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "pramodisgoodboy@"
//we give here post request because we dont want that our password is also go to url
// ROUTE 1 - Create a user using : POST "/api/auth/createuser". No login required
router.post('/createuser',[
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 5 }),
    body('password', 'Password must be atleast five characters').isLength({ min: 5 }),
    //this above code is for expecting the valid values from user
    //we can do this by using express validator

], async (req, res)=> {
//If there are errors return bad request and errors
    // console.log(req.body);
    // const user = User(req.body);
    // user.save()
    // res.send(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the email exists already
    try {
    let user = await User.findOne({email: req.body.email})
    if(user){
      return res.status(400).json({error:"Sorry a user with this email is already exists"})
    }
  //setting bcrypt - we use bcrpt for generating and and salt pass
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    //create a new user
     user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })
      //authtoken
      const data = {
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json({authtoken})
    } 
    
      catch (error) {
         console.error(err.message)
         res.status(500).send("some error occured");
      }
      
      // .then(user => res.json(user))
      //  .catch(err=> {console.log(err)
      //  res.json({error: 'Please enter a unique value for email', message: err.message})  })
    })

    // ROUTE - 2 Authentication of user using POST "/api/auth/createuser". No login required

    router.post('/login',[
      body('email', 'Enter a valid email').isEmail(),
      body('password', 'password cant br blank').exists(),
     ] , async (req, res)=> {
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const {email, password} = req.body;
        try {
          let user = await User.findOne({email});
          if(!user){
            return res.status(400).json({error: "please try to login with correct crediantials"});
          }

          const passwordCompare = await bcrypt.compare(password, user.password);
          if(!passwordCompare){
            return res.status(400).json({error: "please try to login with correct crediantials"});
          }
          const data = {
            user:{
              id: user.id
            }
          }

          const authtoken = jwt.sign(data, JWT_SECRET)
          res.json({authtoken})
        }
        catch (error) {
          console.error(error.message)
          res.status(500).send("Internal server error");
        }
      })

      // ROUTE 3 - get logged in user detail using POST "/api/auth/getuser". No login required
      router.post('/getuser', fetchuser, async (req, res)=> {

        try {
          userId = req.user.id;
          const user = await User.findById(userId).select("-password")
          res.send(user)
          
        } catch (error) {
          console.error(error.message)
          res.status(500).send("Internal server error");
        }
      })
module.exports = router