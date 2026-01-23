const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const {HoldingsModel} = require('./models/HoldingsModel');
const {PositionsModel}=require('./models/PositionsModel');
const{OrdersModel} = require('./models/OrdersModel')
const{UserModel} = require('./models/UserModel')
const passport = require('passport')
const passportLocalMongoose = require('passport-local-mongoose');
const passportLocal = require('passport-local')
const session = require('express-session')
const PORT = process.env.PORT || 3000;


const mongo_url = process.env.MONGO_URL;
mongoose.connect(mongo_url);

const app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());




passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

passport.use(UserModel.createStrategy());


app.get("/",(req,res)=>{
    if(req.isAuthenticated()){
res.redirect("https://main.d1fvy7uj8oerxp.amplifyapp.com/");
    }
    else{
        res.redirect("https://main.d3urnn3mu6ibl1.amplifyapp.com/");
    }
})
app.post("/signup",async(req,res)=>{
const user_data = req.body;
console.log(user_data);

try{
const user = await UserModel.register({userMobile:user_data.userMobile, email : user_data.email, name :user_data.name}, user_data.password);
  req.login(user, (err) => {
      if (err) return next(err);
      res.redirect("https://main.d1fvy7uj8oerxp.amplifyapp.com/");
    });

}
catch(err){
res.redirect("https://main.d3urnn3mu6ibl1.amplifyapp.com/signup")
}
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.render("https://main.d1fvy7uj8oerxp.amplifyapp.com/")
});

app.post("/logout",(req,res)=>{
     req.logout(err => {
    if (err) return next(err);
    res.redirect("https://main.d3urnn3mu6ibl1.amplifyapp.com/signup");
  });
});

app.get("/user",async(req,res)=>{
    const data = await UserModel.findById(req.user._id);
    res.json(data);

})

app.get("/holdings",async(req,res)=>{

    const data = await HoldingsModel.find({});
    res.json(data);
    console.log("holding trigered successfully");
})

app.get("/positions",async(req,res)=>{
    const data = await PositionsModel.find({});
    res.json(data);
    console.log("Position trigered successfuly");
})

app.post("/buy",(req,res)=>{
    console.log("buy tigerd");
    const data = req.body;
    const newOrder = new OrdersModel({
        "name" : data.uuid,
        "price" : data.price,
        "qty" : data.qty,
        "mode": data.mode
    })

    newOrder.save();
console.log(data);
res.send("order saved successfully");

})

app.listen(PORT,(req,res)=>{
    console.log("server started");
})