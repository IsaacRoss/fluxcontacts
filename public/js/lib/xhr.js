/**
 * Created by iross on 7/24/2015.
 */

exports.getJSON = (url, cb) => {
    var data;
    var req = new XMLHttpRequest();
    req.onload = function(){
        if(req.status === 404){
            cb(new Error('not found'));
        }else{
            try{
                data = JSON.parse(req.response);
            }catch(err){
                cb(err)
            }
            cb(null, data);
        }
    };
    req.open("GET", url);
    req.send();
};

exports.postJSON = (url, obj, cb) => {
    var req = new XMLHttpRequest();
    req.onload = function () {
        cb(JSON.parse(req.response));
    };
    req.open('POST', url);
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    req.send(JSON.stringify(obj));
};

exports.deleteJSON = (url, cb) => {
    var req = new XMLHttpRequest();
    req.onload = cb;
    req.open('DELETE', url);
    req.send();
};