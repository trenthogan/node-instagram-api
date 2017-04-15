/**
 * Requires
 */
const express = require('express')
const app = express()
const instagramAPI = require('instagram-api');

 /**
  * Config
  */
const port = 3001
const accessToken = 'foobar';
const instagram = new instagramAPI(accessToken);

/**
 * Routes
 */
app.get('/instagram-feed', function (req, res) {
  instagram.userSelfMedia().then(function(result) {
    console.log(result); // user info
    res.send(result)
  }, function(err){
    console.log(err); // error info
    res.send(err)
  })
})

/**
 * Listen
 */
app.listen(port, function () {
  console.log(`Aplication listening on ${port}`)
})