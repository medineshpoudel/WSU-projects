const TestColors = require('../model/testColors.model');


const getTestColors = async (req,res)=>{
    try{
        const testColors = await TestColors.find();
        res.status(200).json(testColors)
    }catch(error){
        console.error('Error adding test color:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const addTestColor = async (req, res) => {
    try {
        const { actualColorName, colorSelected : selected} = req.body;
         const updateResult = await TestColors.findOneAndUpdate(
                { actualColorName }, 
                { $push: { colorSelected:  selected  } }, 
                {
                    new: true,   
                    upsert: true,  
            }
            );
            res.status(200).json(updateResult);
    } catch (error) {
        console.error('Error adding test color:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = { addTestColor, getTestColors };
