const OriginalColor = require('../model/originalColors.model');


const getOriginalColors = async (req,res)=>{
    try{
        const originalColors = await OriginalColor.find();
        res.status(200).json(originalColors)
    }catch(error){
        console.error('Error getting  original color:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const addOriginalColor = async (req, res) => {
    try {
        const { actualColorName, colorSelected : selected} = req.body;
         const updateResult = await OriginalColor.findOneAndUpdate(
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

const deleteOriginalColor = async (req,res)=>{
    const {actualColor} = req.body
    try{
        const deletedResult = await OriginalColor.fineOneAndDelete({actualColorName})
    }catch(error){
        console.error('Error deleting  original color:', error);
         res.status(500).json({message: 'Internal server error'})
    }
}


module.exports = { addOriginalColor, getOriginalColors , deleteOriginalColor};
