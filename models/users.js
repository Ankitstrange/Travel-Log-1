const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema(
    {
        name : {
            first : {
                type : String,
                required : true,
                maxlength : 55,
                minlength : 2,
                match : /^[a-zA-Z]+[ a-zA-Z]*$/,
                trim : true
            },
            last : {
                type : String,
                required : false,
                maxlength : 55,
                minlength : 2,
                match : /^[a-zA-Z]+[ a-zA-Z]*$/,
                trim : true
            }
            
        },
        username : {
            type : String,
            required : true,
            unique : true,
            index : true,
            minlength : 5,
            maxlength : 55,
            match : /^([a-zA-Z0-9._]+)$/,
            trim : true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            maxlength : 100,
            minlength : 5,
            trim : true,
            match : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        },
        phone : {
            type : String,
            required : false,
            unique : true,
            maxlength : 15,
            minlength : 10,
            match : /^(\d{10,15})$/
        },
        password : {
            type : String,
            required : true
        },
        bio : {
            type : String,
            maxlength : 250,
            trim : true,
            required : false
        },
        userType : {
            type : String,
            enum : ['ADMIN','USER'],
            default : 'USER'
        }

    },
    {timestamps : true}
)

const user  = mongoose.model('user',userSchema);

validate = function(object){
    const schema = Joi.object({
        firstName : Joi.string().min(2).max(55).regex(/^[a-zA-Z]+[ a-zA-Z]*$/).required(),
        lastName : Joi.string().min(2).max(55).regex(/^[a-zA-Z]+[ a-zA-Z]*$/),
        username : Joi.string().min(5).max(55).alphanum().required(),
        email : Joi.string().min(5).max(55).regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required(),
        phone : Joi.string().regex(/^(\d{10,15})$/).required(),
        bio : Joi.string().max(250),
        password : Joi.string().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,35}$/).required(),
        userType : Joi.string().valid('ADMIN','USER').default('USER'),
    })
    return schema.validate(object);
}

module.exports.user = user
module.exports.validate = validate
