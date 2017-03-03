// Twilio Credentials 
var accountSid = 'AC90b9791076d4ab9a014eb59c590afe06'; 
var authToken = '5834f9621925a0036ea3d93e075782a5'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
  to: "+12125744453",
  from: "+16467626189",
  body: "Test message",
}, function(err, message) { 
  if (err) {
    console.log('Error!', err);
    return;
  }
  console.log('Successfully sent message');
  console.log(message.sid);
});
