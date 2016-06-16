// ================================================================================
// ROUTER
// ================================================================================

var path = require('path');
var orm = require('../config/orm.js');

var sqlBurgerModel = require("../model/burger.js");


module.exports = function(app){

    app.post('/add', function(req,res) {
        if(req.body.burgerName){
            sqlBurgerModel.create({burgerName: req.body.burgerName})
            .then(function(){
                res.redirect('/');
            })
        }else{
            res.redirect('/');
        }
    });

    app.put('/devour', function(req,res){
        sqlBurgerModel.update(
        {
            devoured: 1
        },
        {
            where: {
                id: req.body.burgerid
            }
        })
        .then(function(){
            res.redirect('/');
        })
    });

    app.get('/', function(req,res) {
        sqlBurgerModel.findAll({})
        .then(function(burger){
            res.render('index', {burger});
        })

    });

        
}



