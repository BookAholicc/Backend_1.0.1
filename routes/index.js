//FIREBASE RELATED
var admin = require("firebase-admin");
var serviceAccount = require("../bookaholic-dev-org-firebase-adminsdk-hcnz6-0c74c4f13a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bookaholic-dev-org.firebaseio.com"
});


/*Gettin Root Database Refercnce*/
var db = admin.database();

module.exports = function(app, db) {
  app.get('/', function(req, res) {
    res.status(200).render("coming_soon.html");
  });

  app.get('/adminPanel', function(req, res) {

    res.status(200).render("admin_panel.html");

  });

  app.get('/search', function(req, res) {

    res.status(200).render("search.html");

  });

  app.get('/searchBooks', function(req, res) {

    //get the Keyword from the Response data.
    var searchText = req.body.searchText;
    var booksRef = admin.database().ref("books");

  });


  /*ADD BOOKS - API

  	The API which is used to Add a book to our db.
  	This is used in {@link Addbooks.html/ Internal Facing Page}

  */
  app.post('/api/addbooks', function(req, res) {

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

    // Constructing Book Model
    var newBook = {
      pid: Date.now(),
      productName: req.body.productName,
      oneLiner: req.body.oneLiner,
      publisherName: req.body.publisherName,
      MRP: req.body.MRP,
      isTopRated: req.body.isTopRated,
      isBestSeller: req.body.isBestSeller,
      bookSummary: req.body.bookSummary,
      imageURL: req.body.imageURL,
      baseCategory: req.body.baseCategory,
      subCategory: req.body.subCategory,
      quantity: req.body.quantity,
      ISBN: req.body.ISBN,
      pages: req.body.pages,
      readingDuration: req.body.readingDuration,
      language: req.body.language,
    };

    console.log("Model Connstructed");
    //Getting Refernce to our Books ref.
    var booksRef = admin.database().ref("books");
    booksRef.push(newBook, err => {
      let returnJson = {}
      if (err) {
        returnJson.status = 0;
      } else {
        returnJson.status = 1;
      }
      res.status(200).json(returnJson);
    });
  });
}
