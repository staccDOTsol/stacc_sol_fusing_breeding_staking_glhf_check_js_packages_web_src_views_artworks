
const {google} = require('googleapis');

const credentials = JSON.parse("{'whoopsie'}"
let privatekey = credentials
// configure a JWT auth client
let jwtClient = new google.auth.JWT(
       privatekey.client_email,
       null,
       privatekey.private_key,
       ['https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/calendar']);
//authenticate request
jwtClient.authorize(function (err, tokens) {
 if (err) {
   console.log(err);
   return;
 } else {
   console.log("Successfully connected!");
 }
});
//Google Drive API
let drive = google.drive('v3');
drive.files.list({
   auth: jwtClient
}, function (err, response) {
   if (err) {
       console.log('The API returned an error: ' + err);
       return;
   }
   console.log(response)
   var files = response.files;
   if (files.length == 0) {
       console.log('No files found.');
   } else {
       console.log('Files from Google Drive:');
       for (var i = 0; i < files.length; i++) {
           var file = files[i];
           console.log('%s (%s)', file.name, file.id);
       }
   }
});