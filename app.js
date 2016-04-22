var gcloud = require('gcloud')({
   projectId: 'omarcoteixeira-2015',
   keyFilename: 'keyfile.json'
});

var vision = gcloud.vision();
vision.detectText('./images/moro.jpg', function (err, text) {
   if(err) console.log(err);
   
   else if(text.length > 0){
       console.log(text);
   }
});