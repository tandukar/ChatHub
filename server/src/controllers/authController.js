const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/Users");

//this should be change
//not this
exports.createUser = async(req, res) => {
    try {
        const { username, email, password, dob } = req.body;
        const emailExists = await User.findOne({ email });
        if (emailExists)
            return res.status(400).json({ message: "Email already exists" });
        const salt = await bcrypt.genSalt(10);
        const hashPwd = await bcrypt.hash(password, salt);
        const user = await User({
            username,
            email,
            dob,
            password: hashPwd,
        });
        await user.save();
        res.status(200).json({ message: "User created successfully", user });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ message: "Internal server error" });
    }
};



exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        const emailExists = await User.findOne({ email });
        if (!emailExists)
            return res.json({
                status: 401,
                message: "Email or password is wrong",
            });
        const validPwd = await bcrypt.compare(password, emailExists.password);
        if (!validPwd)
            return res.json({
                status: 401,
                message: "Email or password is wrong",
            });
        const token = jwt.sign({ _id: emailExists._id }, process.env.TOKEN_SECRET);
        console.log(token);
        // store the token in the cookie
        // res.cookie("auth-token", token, { maxAge: 900000, httpOnly: true });
        // res.cookie("auth-token", token, { maxAge: 900000, httpOnly: true, sameSite: "None", secure: true });

        res.cookie("auth-token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict", // Enforce secure cookies & // Prevent CSRF attacks by setting sameSite
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });

        // res
        //     .header("auth-token", token)
        //     .json({ message: "Logged in successfully", token });
        console.log(token);

        return res
            .header("auth-token", token)
            .status(200)
            .json({ status: 200, message: "Logged in successfully" });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ message: "Internal server error" });
    }
};