var express = require('express');
var cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(fileUpload());

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


app.post("/api/fileanalyse", (req, res) => {
  const {name, size, mimetype} = req.files.upfile
  console.log(req.files.upfile);
  res.json({name: name, type: mimetype, size: size})
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
