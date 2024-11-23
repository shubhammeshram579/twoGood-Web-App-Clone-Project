var express = require('express');
var router = express.Router();


// import models
const userModel = require(".//../models/users");
const bespokeModel = require(".//../models/BespokeEvent");
const groupOrderModel = require(".//../models/groupOrder");
const Afternoon = require(".//../models/Afternoon");
const Eveningproduct = require(".//../models/eveningProduct");


// catering page router
//*************************************************************************************
// get catering home page
router.get('/catering', function(req, res, next) {
    res.render('catringPrduct/catering');
  });


// catering morning product router
router.get('/morningProduct', function(req, res, next) {
    res.render('catringPrduct/morningProduct');
  });
  
  
  // lunch product router
  router.get('/lunch', function(req, res, next) {
    res.render('catringPrduct/lunch');
  });


// facth catering apternoon product data from mongodb
router.get("/Afternoon", async function(req, res) {
    let AfternoonProduct = await Afternoon.find({});
    res.render("catringPrduct/Afternoon" ,{AfternoonProduct})
  })
  
  
  // API route for live search
  router.get('/Afternoon/search', async (req, res) => {
    const query = req.query.q;
    try {
  
      let  afternoonProducts;
  
      if(query){
         // Fetch products from MongoDB matching the search query
         afternoonProducts = await Afternoon.find({
        name: { $regex: query, $options: 'i' }, // 'i' for case-insensitive search
      });
  
      }else{
        afternoonProducts = await Afternoon.find({});
      }
    
      // Return the search results as JSON
      res.json(afternoonProducts);
      
  
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  
  
  // facth catering evening product data from mongodb
  router.get("/evining", async function(req, res) {
    let eveningproducts = await Eveningproduct.find({});
    res.render("catringPrduct/eveningProduct" ,{eveningproducts})
  })
  
  
  // API route for live search
  router.get('/evining/search', async (req, res) => {
    const query = req.query.q;
    try {
  
      let  eveningproducts;
  
      if(query){
         // Fetch products from MongoDB matching the search query
      eveningproducts = await Eveningproduct.find({
        name: { $regex: query, $options: 'i' }, // 'i' for case-insensitive search
      });
  
      }else{
        eveningproducts = await Eveningproduct.find({});
      }
    
      // Return the search results as JSON
      res.json(eveningproducts);
    
  
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  // catrering header navabar router
  //*****************************************************
  // bespokeEvent page 
  router.get('/bespoke' ,isLoggedIn,  async function(req, res, next) {
    const user = await userModel
    .findOne({username:req.session.passport.user})
    .populate("eventPost")
    res.render('catringPrduct/bespoke');
  });
  
  
  
  // get create post router for posted file store in multer folder 
  router.post('/bespoke', isLoggedIn, async function(req, res, next) {
    try {
      const user = await userModel.findOne({username:req.session.passport.user});
      const post = await bespokeModel.create({
        user: user._id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        date: req.body.date,
        numberofgest:req.body.numberofgest,
        address: req.body.address,
        state: req.body.state,
        pastcode: req.body.pastcode,
        massage: req.body.massage,
        checkbox: req.body.checkbox,
      });
    
      user.eventPost.push(post._id);
      await user.save();

      req.flash('success', 'successfully added!');
      res.redirect("/bespoke")
    } catch (error) {
      req.flash('error', 'An error occurred while processing your event.');
      res.redirect('/bespoke');
      
    }
  });
  
  
  
  
  // get group order catring page 
  router.get('/group-order' ,isLoggedIn,  async function(req, res, next) {
    const user = await userModel
    .findOne({username:req.session.passport.user})
    .populate("gOrder")
    res.render('catringPrduct/groupOrder');
  });
  
  
  
  // get create post router for posted file store in multer folder 
  router.post('/group-order', isLoggedIn, async function(req, res, next) {
    try {
      const user = await userModel.findOne({username:req.session.passport.user});
      const orderp = await groupOrderModel.create({
        user: user._id,
        groupOrder: req.body.groupOrder,
        email: req.body.email,
      });
    
      user.gOrder.push(orderp._id);
      await user.save();

      req.flash('success', 'successfully added!');
      res.redirect("/group-order")
    } catch (error) {
      req.flash('error', 'An error occurred while processing your groups.');
      res.redirect('/group-order');
      
    }
  });



  
// user isAuthenticated 
function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
      return next();
    }
    req.flash("error", "Please login first.");
    res.redirect("/login-user");
  }


module.exports = router;