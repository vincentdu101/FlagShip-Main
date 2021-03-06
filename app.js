var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
// var NodeSession = require("node-session");
var session = require("express-session");
var bcrypt = require("bcryptjs");
var passport = require("passport");
var controllers = require("./controllers");
var database = require("./config/database");
var LocalStrategy = require("passport-local").Strategy;
var User = require("./models/User");
var cookieParser = require("cookie-parser");
var redis = require("redis");
var jwt = require('jsonwebtoken');
var RedisStore = require("connect-redis")(session);
var client = redis.createClient();

// for parsing multipart/form-data
var multer = require("multer");
var upload = multer();
// var nodeSession = new NodeSession({secret: "dancing in the dark"});

// function session(req, res, next) {
// 	nodeSession.startSession(req, res, next);
// }
// 
app.use(session({
	resave: false, 
	saveUninitialized: false, 
	secret: 'SOMERANDOMSECRETHERE', 
	cookie: { maxAge: 60000 },
	store: new RedisStore({
		host: "localhost",
		port: 6379,
		client: client,
		ttl: 260
	})
}));
app.use(cookieParser("SOMERANDOMSECRETHERE"));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(User.authenticate()));

app.use(cors({
    allowedOrigins: [
        'http://localhost:3000'
    ]
}));

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// for parsing multipart/form-data
app.use(bodyParser.json());
database.connect();


app.get("/", function(req, res){
	res.send("hello world");
});

/* Role */
app.get("/roles", controllers.role.index);
app.get("/roles/:id", controllers.role.get);
app.post("/roles", upload.array(), controllers.role.create);

/* User */
app.get("/users", controllers.user.index);
app.get("/users/:id", controllers.user.get);
app.put("/users/:id", upload.array(), controllers.user.update);
app.delete("/users/:id", controllers.user.delete);

/* Category */
app.get("/categories", controllers.category.index);
app.get("/categories/:id", controllers.category.get);
app.post("/categories", upload.array(), controllers.category.create);
app.put("/categories/:id", upload.array(), controllers.category.update);
app.delete("/categories/:id", controllers.category.delete);

/* Media */
app.get("/medium", controllers.media.index);
app.get("/medium/:id", controllers.media.get);
app.post("/medium", upload.array(), controllers.media.create);
app.put("/medium/:id", upload.array(), controllers.media.update);
app.delete("/medium/:id", controllers.media.delete);

/* Section */
app.get("/skills", controllers.skill.index);
app.get("/skills/:id", controllers.skill.get);
app.post("/skills", upload.array(), controllers.skill.create);
app.put("/skills/:id", upload.array(), controllers.skill.update);
app.delete("/skills/:id", controllers.skill.delete);

/* Article */
app.get("/articles", controllers.article.index);
app.get("/articles/:id", controllers.article.get);
app.post("/articles", upload.array(), controllers.article.create);
app.post("/articlesList", upload.array(), controllers.article.createList);
app.put("/articles/:id", upload.array(), controllers.article.update);
app.delete("/articles/:id", controllers.article.delete);

/* login */
// app.post("/login", upload.array(), controllers.user.login);
app.post("/register", upload.array(), controllers.user.register);
app.post("/me", upload.array(), controllers.user.verifyUser);
app.post("/login", upload.array(), controllers.user.login);

app.listen(8080, function(){
	console.log("server app running port 8080");
});

