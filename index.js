var port = 9000;
var orion = require('orion');
var express = require('express');
var app = express();
var path = require('path');

app.get('/ide/defaults.pref', function(req, res) {
  var df = path.join(__dirname, 'resources/defaults.pref');
  console.log('sending file: "'+df+"'");
  res.sendFile(df);
});

app.use('/ide', orion({ workspaceDir: process.env.HOME }))

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});
