const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.verifyToken = async(req, res, next) =>{
    // console.log("Cookies:", req.cookies);

    const token = req.cookies.token;

    if (!token) {
        console.log("Access Denied! Token required");
        return res.status(401).json({
            message: "Access Denied!",
        });
    }
    
    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        req.user =  verified; // save user info for later use

        next();
    } catch(err){
        console.log('Error at token verifying middleware : ', err);
        return res.status(401).json({ message: "Invalid Token!" });
    }

}