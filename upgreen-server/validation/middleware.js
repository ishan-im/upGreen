const admin = require("firebase-admin");

class Middleware{


    async decodeToken(req, res, next) {

        try {

            const token = req.headers.authorization.split(" ")[1];

            console.log('token', token);
            
            const decoded = admin.auth().verifyIdToken(token);
            
            if(decoded){
                next();
            }
            return res.json({error: 'Unauthorized'});

        } catch (error) {
            console.log(error);
            res.status(401).json({error: 'Token is not valid'});
        }
    }

}


module.exports = new Middleware();