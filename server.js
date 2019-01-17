const express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    passport = require("passport"),

    users = require("./routes/api/user"),
    profile = require("./routes/api/profile"),
    posts = require("./routes/api/post"),

    app = express()
    

//Body parser middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//connect to mongodb
mongoose
    .connect(db, {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport.js")(passport);

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));