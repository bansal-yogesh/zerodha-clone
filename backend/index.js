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
app.set("trust proxy", 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, sameSite: "none", domain : ".bansaltrades.com" }
}));

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors({origin: ["https://www.dashbord.bansaltrades.com","https://www.home.bansaltrades.com"], // your frontend URL
  credentials: true}));



passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

passport.use(UserModel.createStrategy());


app.get("/",(req,res)=>{
    if(req.isAuthenticated()){
res.redirect("https://www.dashbord.bansaltrades.com/");
    }
    else{
        res.redirect("https://www.home.bansaltrades.com/");
    }
})
app.post("/signup",async(req,res)=>{
const user_data = req.body;
console.log(user_data);

try{
const user = await UserModel.register({userMobile:user_data.userMobile, email : user_data.email, name :user_data.name}, user_data.password);
  req.login(user, (err) => {
      if (err) return next(err);
      console.log(user);
      console.log("login inside signup succesfully called without error ");
      
      res.json({ success: true, user });
    });

}
catch(err){
   console.log(err);
res.redirect("https://www.home.bansaltrades.com/")
}
});

// app.post("/login", passport.authenticate("local"), (req, res) => {
//   res.redirect("https://www.dashbord.bansaltrades.com/")
// });
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ success: false, message: "Invalid credentials" });
    req.login(user, (err) => {
      if (err) return next(err);
      // send success JSON, cookie is automatically set
      res.json({ success: true, user });
    });
  })(req, res, next);
});

app.get("/logout",(req,res)=>{
     req.logout(err => {
        console.log("logout called");
    if (err) return next(err);
    res.redirect("https://www.bansaltrades.com");
  });
});

app.get("/user",async(req,res)=>{
console.log("user rout is called from backend");
console.log("user rout called");
console.log(req.user);
    // const data = await UserModel.findById(req.user._id);
    res.json(req.user);

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