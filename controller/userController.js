const { user,validate } = require("../models/users");

const register = async (req,res,next) => {
    const { error } = validate(req.body);
    if(error){
        let errors = "";
        error.details.forEach(e => {
            errors += e.message + "\n";
        });
        return res.status(400).send(errors);
    }
    
    userObj = {
        name : {
            first : req.body.firstName.trim(),
            last  : req.body.lastName !==null?req.body.lastName.trim():"" 
        },
        email : req.body.email.trim(),
        username : req.body.username.trim(),
        phone : req.body.phone.trim(),
        bio : req.body.bio==undefined?"":req.body.bio.trim(),
        password : req.body.password.trim(),
        userType : req.body.userType
    }

    if(await user.findOne({$or : [{username : userObj.username}, {email : userObj.email},{phone : userObj.phone}] }) !== null)return res.status(400).send("User is already registered");
    let newUser = await user.create(userObj);
    return res.status(201).send(newUser);
    next();
    
};

module.exports = {
    register : register
}
