const User = require('../models/User');

// check duplicate widegets
const checkDuplicateWidgets = (widgets, city) => {
    let isDuplicate = false
    widgets.forEach(element => {
        if(element.city === city){
            isDuplicate = true
        }
    });
    return isDuplicate
}
/**
 * Add widget to a user based on passed city.
 */
module.exports.add_widget = async (req, res) => {
    let { city, jwt } = req.body;
    try{
        const user = await User.findOne({"token": jwt})
        const isDuplicate = checkDuplicateWidgets(user.widgets, city)
        if(!isDuplicate){
            user.widgets.push({"city": city, "id": user._id + city})
            user.save();
            res.status(201).json({test: 'true'})
        }
    }
    catch(err){
        console.log(err)
    }
}
/**
 * Return widgets to the client
 */
module.exports.widgets = async (req, res) => {
    const { jwt } = req.body;
    try{
        const user = await User.findOne({"token": jwt})
        res.status(201).json(user.widgets)
    }
    catch(err){
        console.log(err)
    }
}

module.exports.delete_widget = async (req, res) => {
    const { jwt, city } = req.body;
    try{    
        const user = await User.findOneAndUpdate({"token": jwt}, {$pull : { "widgets" : {"city" : city}}})
        res.status(201)
    }
    catch(err) {
        console.log(err)
    }

}