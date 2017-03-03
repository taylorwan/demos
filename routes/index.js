var express = require('express'),
    router  = express.Router(),
    app     = express(),
    locreq  = require('locreq')(__dirname),
    config  = locreq('config/config'),
    client  = require('twilio')(config['accountSid'], config['authToken']); ;

app.post('/send-text',function(res,req){
  console.log(req.params.msg);
  client.messages.create({
      to: "+12125744453",
      from: "+16467626189",
      body: req.params.msg,
    }, function(err, message) { 
      if (err) {
        res.render('campaign-sent', {
          err: err,
          params: req.params
        });
      }
      res.render('campaign-sent', {
        message: message,
        params: req.params
      });
      console.log('Successfully sent', req.params.name, 'to', req.params.list);
      console.log(message.sid);
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Demos' });
});

/* GET home page. */
router.get('/browse', function(req, res, next) {
  res.render('browse', { title: 'Your Lists' });
});

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.render('list', { title: 'Your Lists' });
});

/* GET home page. */
router.get('/create-list', function(req, res, next) {
  res.render('create-list', { title: 'Create List' });
});

/* GET home page. */
router.get('/friends', function(req, res, next) {
  res.render('friends', { title: 'List - DC Friends' });
});

router.get('/bills', function(req, res, next) {
  res.render('bills', { title: 'Bill List' });
});


router.get('/signup', function(req, res) {
  res.render('signform', { title: 'Sign Up' , bodyClass: 'sign_up'});
});


router.get('/create-campaign', function(req, res) {
  res.render('create-campaign', { title: 'Create A Campaign' });
});

router.get('/campaign-sent', function(req, res) {
  res.render('campaign-sent', { title: 'Campaign Sent!' });
});


/* GET New User page. */
// router.get('/user/:username', function(req, res) {
//   var db = req.db;
//   var collection = db.get('usercollection');
//   users = collection.find({},{},function(e,docs){
//     return docs;
//   });
//   console.log(users);
//   if (!users[req.params.username])
//     res.send('No user matching');
//   res.render('user', { title: 'Profile - ' + req.params.username, user: users[req.params.username]});
// });

/* GET New Campaign page. */
// router.get('/campaignName', function(req, res) {
//   res.render('CampaignName', { title: 'Demos - CampaignName' });
// });

/* GET New User page. */
// router.get('/login', function(req, res) {
//   res.render('login', { title: 'Login' });
// });

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // Set our collection
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
    "username" : userName,
    "email"    : userEmail
  }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      res.redirect("userlist");
    }
  });
});

module.exports = router;
