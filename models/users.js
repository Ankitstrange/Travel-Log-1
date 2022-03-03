const mongoose = require('mongoose');

const user = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            maxlength : 255,
            minlength : 2,
            match : /[a-zA-Z]+[ a-zA-Z]*/
        },
        email : {
            type : String,
            required : true,
            maxlength : 255,
            minlength : 5,
            match : /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
        },
        phone : {
            type : String,
            required : false,
            maxlength : 15,
            minlength : 10,
            match : /(\d{10,15})/
        }
    }
)