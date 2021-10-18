
const {google} = require('googleapis');

const credentials = JSON.parse('{  "type": "service_account",  "project_id": "maximal-valve-170523",  "private_key_id": "8a374d6166cf23b33517e8a6ee26a43088a3e82b",  "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5etj8+kgTEusW\\nEHMnTKU1IxRdR2po7nn/FSZj1TOwukRbT6qYbxtzgYdUe+sZoCJyO9wjlw678jx1\\nlp3cFOx57xOCBxVNOj04dqmtOInucEKWsgqPOTHOYreQAYfscja9awoHzGh0vpjr\\nbDWMsrzzs8vDKZyXxk3T3L8iSs4PmimiVEAknT9nmc5lvgnBFkLzModWgLDWaHIG\\nxojO6k+9BOfqqwYBhRnTn0z4zn4YLRkD0zTndaChbw1xBH9HnBRdJYvanHpNO2Dk\\nSVi9DqzAh0l2mRFFdvy4NsnaXXMpLuU5JqSAgr8EyUwXmx0Ki3zBjKEU1n1+Jw6T\\nQ26OSG/vAgMBAAECggEAIyxUscSUnmlcA1cjPzSdr7HzTq0YVMXEhMbx/MSVhNIN\\n3HMDGt0XC5RooXDOaJGhdqA7YtRmiuWo6XOig/XD0muv+1x0gaylp2t5ScwK/Bh1\\nyDYDIp3qAAVgYgKoUAJotwrxYAE3Xcw3G43tqbzLcDuMTHo7o9yLLb4S0OH2qaZz\\nyXq6autDDaBGoc7b+m9b8xY3L2q6GtxPPNU+UOrUOrDlCITEWbHx9d7MB09ucZ0W\\n0c52Cvi6nEmf+zG/YwaGnvHvCB5PhdhwCMA0zwPp7Js5uj73Nhiiu6uGHlmvNeB3\\nc96kQmBw/NWHizbXZAnoyfsI94cGy/FdT/U3kPH74QKBgQDf+1uayNy4wvcBCRpo\\nFf9k/ZmHyWf8B9xVR+K0HbhUyZ08YhWUXHP7zj3t4JEL7HyfRrqTapNKcHQ8JrW+\\n/Sj2lxqtHI7wLY+1Lgg8EOL7A8jxv45nSXH/5SO59At/33gxczIevnjNwbliFFyy\\ntQbi/CE3PPA60boAgorkkK1jkwKBgQDT/oFCHxM1oYTOJJSEOg6+RPs/icLm89KE\\nNbFsQPNBHqOTnCgWoWTrbz3nFbJpANqR/EQ4fNO4Yn56gwq48RgzfteUdmyhWxPx\\njt1h5milnVPXO0VMhvCeefWcQu+J/yc50oS12v1uebhnPLTDQsmhWo6zNEOQzgon\\n09yOJfJztQKBgQCoRHruTuZbO8U7Fu6qsZP79/VmqK2hDvq9atLqw8UelZS1r25M\\n1iQgUTH/So1Nau247vbuFsvuyYrZQa+aezBSCPT2hpTv5RqoX5u6HGmZcJ9+1o0S\\nFYA6YZe0dJ5LA8SVSdimdivlUBuIjomRjCRPVGFT0Ukct0DIb0oPKo3IVwKBgGnU\\nmxi0RLW4XYE/t7jO9v87lqYgkuETBZwk5d7iCc4Pip+tDEJH7gausRuEtF1BJNxO\\nMIx2nIdm/DcS5i5vhaJnhx3BhPeEbU9g/9nY2ZMcGHfRSgYrM0IaJmgM7mJYs29l\\nTgUvPueA8nLvVlpIJDpd5/FEfRp0EZPSaz+3Z/MlAoGASYJdpRVJDyboSZSRgz9B\\n6r7yCIggGMtLXZNPWiNlYIlwaytRBR5FOmUU7mfDGEOSurfp9mzSVtl3P6Zp9YFL\\n9ZMnXX79Su5tM/Ju6o9hrGnzB22GiAHFRt6aLLDZc0nhcgMKS/ldWKfL9tXiviAA\\nsCfT29xPvwd8azuUMrAY/AY=\\n-----END PRIVATE KEY-----\\n",  "client_email": "845911605419-compute@developer.gserviceaccount.com",  "client_id": "113905828113467399430",  "auth_uri": "https://accounts.google.com/o/oauth2/auth",  "token_uri": "https://oauth2.googleapis.com/token",  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/845911605419-compute%40developer.gserviceaccount.com"}')
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