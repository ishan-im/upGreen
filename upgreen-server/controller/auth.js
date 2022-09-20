const db = require("../firebase-auth/firebase-config");


//read  all user data



exports.getAllUser = async (req, res) => {

    try {

        const userRef = db.collection("users")
        const response = await userRef.get();

        console.log('response', response);

        if (response.empty) {
            
            res.status(404).json({error: 'No User:('});

        }

            let responseArr = [];

            response.forEach((doc) => {
              console.log(doc.id);
                responseArr.push(doc.data());
            });
    
            res.send(responseArr);
    
        

    }
       
      
      catch(error) {

        console.log('error', error);
        res.status(400).json({error: 'Error getting user'});
        
      }
}



// get individual user data

exports.getUser = async (req, res) => {

    try {

        console.log('req.params: ',req.params.id);

        const userRef = db.collection("users").doc(req.params.id);
        const response = await userRef.get();

        console.log('response', response.data());

        if (!response.exists) {
            res.status(404).json({error: 'User not found'});
        } else {
            res.send(response.data());
        }
    } catch(error) {
        res.status(400).json({error: 'Error getting user'});
        res.send(error);    
    }
}





// update profile


 exports.updateUser = async(req, res) => {

    try {
      const id=req.params.id;
      const newFirstName = req.body.displayName
      const userRef = await db.collection("users").doc(id)
      .update({
        displayName,
        password,
        profilePicture,
        
      });
      res.send(userRef);
    } catch(error) {
        console.log(error);
        res.status(400).json('error updating user');
    }

  };



  // delete user


  exports.deleteUser = async (req, res) => {

    try {
      const response = await db.collection("users").doc(req.params.id).delete();
      res.send(response);
    } 
    catch(error) {
        console.log(error);
      res.status(400).json('error deleting user');
    }

  }