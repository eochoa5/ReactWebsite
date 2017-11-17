const path = require('path');
let express = require('express');
let app = express();
let http = require('http').Server(app);

app.use(express.static(path.join(__dirname, '/build')));

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
});

http.listen(process.env.PORT || 5000, function(){
    console.log('SERVER RUNNING');
});