const mongoose = require('mongoose');

const Order = mongoose.model('ORDER');

exports.home = function(req,res) {

    res.render('home')
    
};

exports.about = function(req,res) {

    res.render('about')

};

exports.services = function(req,res){

    res.render('services')
        
    
};

exports.contacts = function(req,res){

       res.render('contacts')
}

exports.order = function(req,res){
    res.render('order')
}

exports.order1 = function(req,res){
    res.render('orders');
}



exports.read = function(req,res){
  
   Order.find((err,docs) =>{
        if(!err){
            res.render('park',{
              list:docs  
            });
        
    }
    else{
        console.log('There is an error' +err)
    }
})

}






exports.okay = function(req,res){

    //console.log(req.body)
    insertRecords(req,res);
}


function insertRecords(req,res){

    var order = new Order();

    order.name = req.body.name;
    order.phone = req.body.phone;
    order.location = req.body.location;
    order.message = req.body.message;

    order.save((err,doc)  =>{

        if(!err){
           res.redirect('/ordering')
        }
        else{
            console.log('There is an error')
        }
    });
}





