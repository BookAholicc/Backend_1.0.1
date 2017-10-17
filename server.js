// Express Boiler Plate code
const express = require('express');
const app = express();
var path = require('path');
var cors = require('cors')
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// WE ARE USING FIREBASE FROM ADMIN/SERVER, SO NEED A SERVICE ACCOUNT FILE

// The Root service file from whch authenticates Firebase Admin SDK

// view engine setup
app.set('views', __dirname + 'public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(__dirname + './public'));
app.use(express.static(path.join(__dirname, './public')));



/*Get the Root Page ,

	HTML pages are put in Views Directory
	JS & Css Files are put in public Directory
	the HTML Files are
*/

require('./routes')(app, {});

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});




// var productEntitiy = {
//     pid:'',
//     productName:'',
//     oneLiner:'',
//     authorName:'',
//     publisherName:'',
//     MRP : '',
//     isTopRated:'',
//     isBestSeller:'',
//     bookSummary:'',
//     imageURL:'',
//     baseCategory:'',
//     subCategory:'',
//     quantity : '',
//     ISBN:'',
//     pages:'',
//     readingDuration:'',
//     language:'',
//     sources:[],
//     price7:'',
//     price15:'',
//     price30:''

// };
