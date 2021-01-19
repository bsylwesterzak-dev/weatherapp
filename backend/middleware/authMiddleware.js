const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Check if token is active
 * If not return 404 
 */
const requireAuth = (req, res, next) => {
    const token = Object.values(req.body).join();
    
    //check if the token exist & is verified
    if(token){
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
            if(err){
                res.status(403).json({isAuth: false})
            }
            else {
                next();
            }
        })
    }
    else{
        res.status(403).json({isAuth: false})
    }
}

module.exports = { requireAuth };