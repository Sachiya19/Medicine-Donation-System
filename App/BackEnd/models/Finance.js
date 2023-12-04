const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Financeschema = new Schema({

    
    name :{

        type : String,
        required : true 
    },

    ID :{

        type : String,
        required : true 
    },

    Hold :{

        type : String,
        required : true 
    },

    
})

const Finance = mongoose.model("Finance",Financeschema);

module.exports = Finance;