const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Order = require("../models/Order");
const Holding = require("../models/Holding");
const Watchlist = require("../models/WatchList");


const signUp = async (req, res) =>{
    let { username, email, password } = req.body;
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({ message: "User Already Exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        const token = jwt.sign(
            {
                id: newUser._id,
                email: newUser.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,      // for localhost use secure : false & deployment : true
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000,
        });


        return res.status(201).json({ 
            message: "User Created Successfully!",
            token,
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
         });

    } catch(err){
        return res.status(500).json({ error: err.message });
    }
};


const login = async (req, res) =>{
    try{
        const { username, email, password } = req.body;

        const loginValue = username || email;

        if(!loginValue || !password) {
            return res.status(400).json({ message: "Invalid username or password" });
        } 

        
        const existingUser = await User.findOne({
            $or: [
                { username: loginValue },
                { email: loginValue },
            ]
        });

        if(!existingUser) return res.status(404).json({ message: "User Not Found" });

        const isMatch = await bcrypt.compare(password, existingUser.password);

        if(!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            { id: existingUser._id, email: existingUser.email }, 
            process.env.JWT_SECRET,
            { expiresIn: '1d' },
        );
        
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,      // for localhost use : false & deployment : true
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000,
        });



        // console.log("Token Recieved :" , token);
        return res.status(200).json({ message: "Login Successful!", token });

    } catch(err){
        return res.status(500).json({ error: err.message });
    }
};


const getUsers = async(req, res) =>{
    try{

        const users = await User.find().select('-password');

        return res.status(200).json({ users });

    } catch(err){
        return res.status(500).json({ error: err.message });
    }
};


const getUserById = async(req, res) =>{
    try{
        let { id } = req.params;
        const user = await User.findById(id).select('-password');

        if(!user){
            return res.status(404).json({
                message: "User Not Found!"
            });
        }

        return res.status(200).json(user);

    } catch(err){
        return res.status(500).json({ error: err.message });
    }
};

const getCurrentUser = async (req, res) => {
    const userId = req.user.id;
    const user = await User.findById(userId)
        .select("-password");

    res.status(200).json(user);
};

const getProfile = async(req, res) =>{
    try{
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");;
    
        const orders = await Order.countDocuments({ userId });
    
        const holdings = await Holding.countDocuments({ userId });
    
        const watchlist = await Watchlist.countDocuments();
    
        return res.json({
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
    
            stats: {
                orders,
                holdings,
                watchlist,
            },
        });
    } catch(err) {
        console.log("Error occured at profile fetching : ", err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


module.exports = { signUp, login, getUsers, getUserById, getCurrentUser, getProfile };