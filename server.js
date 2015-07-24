var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    uuid = require('node-uuid'),
    app = express();

app.use(cors());
app.use(bodyParser.json());


var contacts = [
    {
        id: uuid.v4(),
        first: "isaac",
        last: 'ross',
        email: 'iross@taskstream.com'
    },
    {
        id: uuid.v4(),
        first: "Joe",
        last: "Schmo",
        email: "joe@yourmomshouse.com"
    }
];


app.get('/contacts', function(req, res){
    res.status(200).json(contacts);
});

app.delete('/contacts/:id', function(req, res){
    var newContacts = contacts.filter(function(x){
        return x.id != req.params.id
    });

    contacts = newContacts;
    res.status(200).json({});

});

app.post('/contacts', function(req, res){
    var contact = req.body || '';
    console.log(contact);
    contact.id = uuid.v4();
    if(contact) {
        contacts.push(contact);
        res.status(200).json(contact)
    }
});

app.listen(3000, function(){
    console.log('app listening');
});