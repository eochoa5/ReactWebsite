const path = require('path');
let express = require('express');
let app = express();
let http = require('http').Server(app);

app.use(express.static(path.join(__dirname, '/build')));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname+'/build/index.html'));

});

http.listen(process.env.PORT || 5000, function(){
    console.log('SERVER RUNNING');
});