const User = require("../models/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose")



exports.signup = async (req, res) => {

    try {


        // fetch data from req body

        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = req.body;


        // validate data

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            })
        }


        // match 2 passwords 

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords and confirm Password does not match"
            })
        }


        // check if user exists or not

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(401).json({
                success: false,
                message: "User already registered"
            })
        }


        // hash password

        const hashPassword = await bcrypt.hash(password, 10);


        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
        });

        return res.status(200).json({
            success: true,
            message: "User registered Successfully",
            user,

        })

    } catch (error) {

        console.log("Error in creating user : ", error.message);
        return res.status(500).json({
            success: false,
            message: error.message,
        })


    }
}


exports.login = async (req, res) => {
    try {

        // fetch data from body

        const {
            email,
            password
        } = req.body;

        // validate data

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            })
        }

        // check if user exists or not

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered please sign up first"
            })
        }


        // check password

        if (await bcrypt.compare(password, user.password)) {


            //    generate token

            const token = jwt.sign({ email: user.email, id: user._id, },
                process.env.JWT_SECRET, { expiresIn: "10h" });

            user.token = token;
            user.password = undefined;


            const options = {
                expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }

            // generate cookie and send response
            res.cookie("token", token, options).status(200).json({
                success: true,
                message: "User logged in successfully",
                token: token,
                user: user,
            });

        }
        else {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect"
            });
        }
    } catch (error) {
        console.log("Error in login", error.message);
        return res.status(500).json({
            success: false,
            message: "login failed please try again later",
        })

    }
}