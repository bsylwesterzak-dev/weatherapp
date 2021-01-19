const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
require('dotenv').config();

// handle errors
const handleErrors = (err) => {
  let errors = {
    email: '',
    password: ''
  }

  // incorrect email
  if(err.message === 'incorrect email'){
    errors.email = 'This email is not registered';
  }

  // incorrect password
  if(err.message === 'incorrect password'){
    errors.password = 'This password is incorrect';
  }

  // duplicate error code
  if(err.code === 11000){
    console.log(err)
    errors.email = 'This email is already registered';
    return errors;
  }

  // validation errors
  if(err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message
    })
  }
  return errors;
}

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: maxAge
  });
};

// send confirmation Email
const confirmationEmail = (email, token) => {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
  mailOption = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Activation Link',
    text: `${process.env.FRONTEND_URL}/confirmation/${token}`
  }
  transporter.sendMail(mailOption, (err, data) => {
    if(err){
        console.log(err)
    } else {
        console.log('Email was sent')
    }
  })
}
/**
 * Get email and password from the client,
 * hash password and create new user in db.
*/
module.exports.signup_post = async (req, res) => {
  let { email, password } = req.body;
  const token = createToken(email)
  const salt = await bcrypt.genSalt();
  password = await bcrypt.hash(password, salt);
  try{
    const user = await User.create({
       email,
       password,
       active: false,
       confirmationToken: token
      });
      confirmationEmail(email, token)
    res.status(201).json({ user: user._id });
  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

/**
 * Get email and password from the client,
 * check user credentials using login function,
 * create token and return token to client
*/
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.login(email, password);
      const token = createToken(user._id);
      user.token = token;
      user.save();
      res.status(200).json({
        jwt: token,
        active: user.active
      })
    }
    catch (err) {
      console.log(err)
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
}

module.exports.check_confirmation = async (req, res) => {
    const { token } = req.body;
    console.log(token)
    try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findOne({email: decoded.id})
      if(user.active === true){
        res.status(201).json({message: 'You already confirmed your email'})
      }
      if(user.confirmationToken === token){
        user.active = true;
        user.save();
        res.status(201).json({message: 'Success, Now you can log in to your account'});
      }
    }
    catch(err){
      if(err.message === 'jwt malformed'){
        res.status(403).json({error: 'malformed'})
      }
    }
}