var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();

app.use(cors());
app.use(bodyParser.json());


var contacts = [
    {
        first: "isaac",
        last: 'ross',
        email: 'iross@taskstream.com'
    },
    {
        first: "Joe",
        last: "Schmo",
        email: "joe@yourmomshouse.com"
    }
];


app.get('/contacts', function(req, res){
    res.status(200).json(contacts);
});

app.post('/contacts', function(req, res){
    var contact = req.body || '';
    console.log(contact);
    if(contact) {
        contacts.push(contact);
        res.status(200).json(contact)
    }
});

app.listen(3000, function(){
    console.log('app listening');
});