const express = require('express');
const app = express();

// ejs
app.set('views', __dirname + '/views');
app.set("view engine", 'ejs');

// bootstrap
app.use('/js', express.static(__dirname + 'node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + 'node_modules/bootstrap/dist/css'));

app.get('/', function(req, res) {
    res.render('index.ejs', {'data': 1234})
});

app.listen(8080, function() {
    console.log('listening on 8080')
}); 

