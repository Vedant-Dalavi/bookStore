const User = require("../models/User");
exports.getAllUserDetails = async (req, res) => {
    try {

        // get User Id 
        const id = req.user.id;

        const userDetails = await User.findById(id).populate("books").exec();

        if (!userDetails) {
            return res.status(404).json({
                success: false,
                message: "User not found",

            })
        }
        return res.status(200).json({
            success: true,
            message: "User Data Fetched Successfully",
            userDetails
        })



    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Enable to get all User Detail",
            error: error.message,
        })

    }
}