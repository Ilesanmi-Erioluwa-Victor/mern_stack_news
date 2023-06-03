const mongoose = require('mongoose');

const userSchema = new mongoose.Shema({
    username : {
        type : String,
        trim : true,
        required : true
    }
})
