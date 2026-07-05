const Holding = require('../models/Holding');


module.exports.getAllHoldings = async(req, res) =>{
    try{
        const userId = req.user.id;
        // const { userId } = req.query;

        const holdings = await Holding.find({ userId });

        return res.status(200).json(holdings);
    } catch(err){
        console.log('Error occurred at Holdings : ', err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
