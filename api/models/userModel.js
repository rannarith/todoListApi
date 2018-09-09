'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    name:{
        type: String
    },
    email:{
        type: String
    },
    username:{
        type: String,
        index: true
    },
    password:{
        type: String
    }
});

module.exports = mongoose.model('Users', UserSchema);