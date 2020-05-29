const mongoose = require('mongoose');
const contacts = mongoose.model('contacts',{
    name:{
        type: String
    },
    email:{
        type:String,
        required:true,
        trim: true
    },
    phone:{
        type:Number,
        required : true,
        unique: true
    },
    dob: {
        type: String
    }
})

module.exports = contacts