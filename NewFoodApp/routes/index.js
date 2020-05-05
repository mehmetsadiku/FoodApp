const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/',(req, res)=>{
res.render("foodDeleveryy")
})
router.get('/login', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);
router.get('/RestaurantForm',(req, res)=>{
  res.render("RestaurantForm")
  })
  router.get('/Restaurant_Home_Page',(req, res)=>{
    res.render("Restaurant_Home_Page")
    })
    router.get('/HomePage',(req, res)=>{
      res.render("HomePage")
      })
module.exports = router;
