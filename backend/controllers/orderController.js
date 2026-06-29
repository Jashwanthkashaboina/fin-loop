const Order = require('../models/Order');


module.exports.placeOrder = async(req, res) =>{
    try{
        console.log("Body:", req.body);
        // const userId = req.user.id;
        const { userId, name, qty, price, mode } = req.body;
        
        const newOrder = new Order({
            userId,
            name,
            qty,
            price,
            mode
        });
        console.log(newOrder);

        await newOrder.save();
        
        res.status(201).json({ message: "Order Placed Successfully" });
    } catch(err){
        console.error('Error at Order Creation : ', err);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
}