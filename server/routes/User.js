// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
    login,
    signup,

} = require("../controllers/auth.js");

const { auth } = require("../middlewares/auth");

const { getAllUserDetails } = require("../controllers/Profile.js");



// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)


router.get("/getAllUserDetails", auth, getAllUserDetails)

module.exports = router