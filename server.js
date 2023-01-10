const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist'));
app.set('port', process.env.PORT || 3000);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(app.get('port'), () => console.log(`Node server listening on port ${app.get('port')}!`));