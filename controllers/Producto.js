
module.exports = function(app, apiRoutes){
    var mongoose = require('mongoose');
    var config = require(process.env.PWD + '/config.js');
    let model = require('../models/products');

    let products = (req, res)=>{
        model.find({}).exec((err, data)=>{
            res.status(200).json(data);
        });
    }

    let new_product = (req, res)=>{
        let data = req.body;

        let p = new model(data);

        p.save((err, p)=>{
            if(!err){
                return res.status(200).json(p);
            }
          
            res.status(500).json({err});
        });
    }

    let byCategory = (req, res)=>{
        model.find({ "data.categoria" : { "$in" : [req.params.category] } }).exec((err, data)=>{
            res.status(200).json(data);
        });
    }

    let byId = (req, res)=>{
        model.find({ _id : mongoose.Types.ObjectId(req.params.id) }).exec((err, data)=>{
            res.status(200).json(data);
        });
    }


    app.get('/api/products', products);
    app.get('/api/products/:category', byCategory);
    app.get('/api/products/by-category/:id', byId);
    apiRoutes.post('/products', new_product);

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