const Holding = require("../models/Holding");
const User = require("../models/User");

module.exports.getSummary = async (req, res) => {
    try {
        // const { userId } = req.body;
        const userId = req.user.id;
        const user = await User.findOne({ _id: userId }, "username");
        const holdings = await Holding.find({ userId });

        // console.log('User name : ', user);
        let totalInvestment = 0;
        let currentValue = 0;

        for (const holding of holdings) {
            totalInvestment += holding.qty * holding.avg;
            currentValue += holding.qty * holding.price;            
        }

        const pnl = currentValue - totalInvestment;
        const pnlPercent = totalInvestment === 0 ? 0 : (pnl / totalInvestment) * 100;
        return res.status(200).json({
            username: user.username,
            totalInvestment,
            currentValue,
            pnl,
            pnlPercent,
        });

    } catch (err) {
        console.error("Error fetching summary:", err);

        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};