module.exports = function(app, apiRoutes){
    var mongoose = require('mongoose');
    var config = require(process.env.PWD + '/config.js');
    let model = require('./products');

    let products = (req, res)=>{
        model.find({}).exec((err, data)=>{
            res.status(200).json(data);
        });
    }

    let byCategory = (req, res)=>{
        model.find({ "data.categoria" : { "$in" : [req.params.category] } }).exec((err, data)=>{
            res.status(200).json(data);
        });
    }

    apiRoutes.get('/api/products', products);
    apiRoutes.get('/api/products/:category', byCategory);

    /*apiRoutes.get('/user/:id', user);
    app.get('/api/user/exists/:email', exists);
    app.post('/api/user/activate', activate);
    app.post('/api/reset/:token', reset);
    app.post('/api/password-reset/', passwordReset);
    app.post('/api/recover/', recover);
    app.post("/api/user", create);
    app.post("/api/login", login);
    apiRoutes.put("/user/:id", update);
    apiRoutes.delete("/user/:id", remove);*/

    return this;
}