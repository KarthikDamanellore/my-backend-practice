const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");

const RegisterUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the email already exists
        const existingEmailUser = await UserModel.findOne({ email });
        if (existingEmailUser) {
            return res.status(400).json({
                type: "error",
                message: "Email already in use. Please use a different email.",
                tag: "email",
            });
        }

        // Check if the username already exists
        const existingNameUser = await UserModel.findOne({ name });
        if (existingNameUser) {
            return res.status(400).json({
                type: "error",
                message:
                    "Username already in use. Please use a different username.",
                tag: "name",
            });
        }

        const userRegister = await UserModel.create({
            name,
            email,
            password,
        });
        res.status(200).json({
            message: "User registered successfully",
            user: userRegister,
        });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

const LoginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userLogin = await UserModel.findOne({ email });

        // if user does not exist
        if (!userLogin) {
            return res.status(400).json({
                type: "error",
                message: "User does not exist with this email. Try again",
                tag: "email",
            });
        }

        // Check if password matches
        const isMatch = await userLogin.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({
                type: "error",
                message: "Incorrect password. Try again",
                tag: "password",
            });
        }

        res.status(200).json({
            message: "User logged in successfully",
            user: userLogin,
        });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

module.exports = {
    RegisterUser,
    LoginUser,
};
