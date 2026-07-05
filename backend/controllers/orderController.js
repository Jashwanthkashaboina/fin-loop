const Order = require('../models/Order');
const Holding = require('../models/Holding');

module.exports.placeOrder = async(req, res) =>{
    try{
        console.log("Body:", req.body);
        // const userId = req.user.id;
        const userId = "6a477d5f057e32505547b2de";
        const { name, qty, price, mode } = req.body;
        
        const newOrder = new Order({
            userId,
            name,
            qty,
            price,
            mode
        });
        console.log(newOrder);

        await newOrder.save();

        const existingHolding = await Holding.findOne({
            userId,
            name,
        });

        // console.log(existingHolding);
        if (!existingHolding) {

            const newHolding = new Holding({
                userId,
                name,
                qty,
                avg: price,
                price,
                net: "0%",
                day: "0%",
                isLoss: false,
            });

            await newHolding.save();

            console.log("New Holding Created");
        } else {
            const totalQty = existingHolding.qty + qty;

            const totalInvestment =
                (existingHolding.qty * existingHolding.avg) +
                (qty * price);

            existingHolding.avg = totalInvestment / totalQty;

            existingHolding.qty = totalQty;

            await existingHolding.save();

            console.log("Holding Updated");
        }
        
        res.status(201).json({ message: "Order Placed Successfully" });
    } catch(err){
        console.error('Error at Order Creation : ', err);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
}


module.exports.sellOrder = async(req, res) =>{
    try{
        // const userId = req.user.id;
        const { name, qty, price, mode } = req.body;
        const userId = "6a477d5f057e32505547b2de";

        const existingHolding = await Holding.findOne({
            userId,
            name,
        });

        if (!existingHolding) {
            return res.status(404).json({
                message: "Holding not found",
            });
        }

        if (existingHolding.qty < qty) {
            return res.status(400).json({
                message: "Insufficient quantity",
            });
        }

        existingHolding.qty -= qty;

        if (existingHolding.qty === 0) {
            await existingHolding.deleteOne();
            console.log("Holding Deleted");
        } else {
            await existingHolding.save();
            console.log("Holding Updated");
        }

        const sellOrder = new Order({
            userId,
            name,
            qty,
            price,
            mode,
        });

        await sellOrder.save();

        return res.status(201).json({
            message: "Sell Order Placed Successfully",
        });



    } catch(err){
        console.log('Error at Sell Order : ', err);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}