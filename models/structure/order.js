const mongoose = require('mongoose')

var orderSchema = new mongoose.Schema({

    name:{
      type:String
    } ,

    phone:{
        type:String
    },

    location:{
        type:String
    },

    message:{
        type:String
    }

})

mongoose.model('ORDER',orderSchema);
