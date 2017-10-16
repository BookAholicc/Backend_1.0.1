
// Initilisation Code
const express = require('express');
const app = express();
var path = require('path');


var cors = require('cors')

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// var admin = require("firebase-admin");

// var serviceAccount = require("./bookaholic-786-firebase-adminsdk-izd89-be4149cddc.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://bookaholic-786.firebaseio.com"
// });


// view engine setup
app.set('views', __dirname + 'public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// view engine setup
app.set('views', path.join(__dirname, 'views'));






app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '../public')));



/*Get the Root Page , 

	HTML pages are put in Views Directory
	JS & Css Files are put in public Directory 
	the HTML Files are
*/
app.get('/',function(req,res){

  res.render("coming_soon.html");

});

app.get('/adminPanel',function(req,res){

  res.render("admin_panel.html");

});







const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
