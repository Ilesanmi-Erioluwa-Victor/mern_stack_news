const mongoose = require('mongoose');

const userSchema = new mongoose.Shema({
    username : {
        type : String,
        trim : true,
        required: true,
        max: 30,
        unique: true,
        index: true,
        lowercase : true
    },

    name: {
        type: String,
        trim: true,
        required: true,
        max : 40
    }
})
