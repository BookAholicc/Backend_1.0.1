
// Express Boiler Plate code
const express = require('express');
const app = express();
var path = require('path');
var cors = require('cors')
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//FIREBASE RELATED
var admin = require("firebase-admin");
var serviceAccount = require("./bookaholic-dev-org-firebase-adminsdk-hcnz6-0c74c4f13a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bookaholic-dev-org.firebaseio.com"
});


/*Gettin Root Database Refercnce*/
var db = admin.database();

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

app.get('/search',function(req,res){

  res.render("search.html");

});

app.get('/searchBooks',function(req,res){

		//get the Keyword from the Response data.
		var searchText =  req.body.searchText;
		var booksRef = db.ref("books");

});


/*ADD BOOKS - API 

	The API which is used to Add a book to our db.
	This is used in {@link Addbooks.html/ Internal Facing Page}

*/
app.post('/api/addbooks',function(req,res){

	console.log("Inside Fucntion");


//     pid
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
//     pages:'',s
//     readingDuration:'',
//     language:'',
    // sources:[],
//     price7:'',
//     price15:'',
//     price30:''



/*The Return Json to send with this request , if book addition is successful 
* will send Product Name as */

	var returnJson = {

	};

	// Constructing Book Model
	var newBook = {
	    pid: Date.now(),
	    productName: req.body.productName,
	    oneLiner:req.body.oneLiner,
	    publisherName:req.body.publisherName,
	    MRP:req.body.MRP,
	    isTopRated:req.body.isTopRated,
	    isBestSeller:req.body.isBestSeller,
	    bookSummary:req.body.bookSummary,
	    imageURL:req.body.imageURL,
	    baseCategory:req.body.baseCategory,
	    subCategory:req.body.subCategory,
	    quantity:req.body.quantity,
	    ISBN:req.body.ISBN,
	    pages:req.body.pages,
	    readingDuration:req.body.readingDuration,
	    language:req.body.language,
	};

	console.log("Model Connstructed");
	//Getting Refernce to our Books ref.
	var booksRef = db.ref("books");
    booksRef.push(newBook,err=>{
        if (err) {
            returnJson.status = 0;
           // Check here whether headers sent or not.
            res.send(returnJson);
        }
        else{
        	// Instered Successfully, return good status
           returnJson.status = 1;
           res.send(returnJson);
        }
    });
});







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