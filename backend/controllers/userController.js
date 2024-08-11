import User from "../models/userModel.js";

export const getUserController = async (req, res) => {
  try {

    const userId = req.params.id;
    const user = userId
    ? await User.findById(userId)
    : await User.findOne({ username: username });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "user data not found",
      data: error,
    });
  }
};
export const getAllUsersController = async (req, res) => {
  try {
    const allusers = await User.find();
    res.status(200).json(allusers);
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "user data not found",
    });
  }
};

export const updateController = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    //update if the user is himself or it is admin  who can update any user info
    if (req.params.id === req.body.userId || user.isAdmin) {
      // Find user by ID and update only the specified fields
      //findByIdAndUpdate function takes three parameters: the first is the query to find the document, the second is the update, and the third is an options object
      let updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        { new: true }
      );

      if(!updatedUser){
        res.status(404).json({ error: "User not found" });
      }
      // Send the updated user as the response
     res.status(200).json(updatedUser);
    }
      else {
        res.status(404).json({ error: "authorization failed to update user" });
      }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      data: error.message,
    });
  }
};

export const deleteController = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
  
      //update if the user is himself or it is admin  who can update any user info
      if (req.params.id === req.body.userId || user.isAdmin) {
        // Find user by ID and update only the specified fields
        //findByIdAndUpdate function takes three parameters: the first is the query to find the document, the second is the update, and the third is an options object
        let updatedUser = await User.findByIdAndDelete(
          req.params.id
        );
  
        if(!updatedUser){
          res.status(404).json({ error: "User not found" });
        }
        // Send the updated user as the response
      res.status(200).json(updatedUser);
      }
        else {
          res.status(404).json({ error: "authorization failed to delete user" });
        }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "internal server error",
        data: error.message,
      });
    }
  };