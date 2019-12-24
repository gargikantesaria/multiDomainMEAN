var businessSchema = require('./businessSchema')
var businessCtrl = {};

businessCtrl.addBusinessUrl = (req, res) => {
    const { userEmail, userBusinessName } = req.body;
    let reqData = {
        userBusinessName: userBusinessName,
        userEmail: userEmail
    }
    businessSchema.create(reqData).then((resp) => {
        res.status(200).json({ body: "Your object has been saved succesfully.", data: resp });
    }).catch((err) => {
        res.status(400).json({ error: "You are facing an error" + err })
    })
}

businessCtrl.getBusinessUrl = (req, res) => {
    let userId = req.params.id;
    businessSchema.findById(userId).then((resp) => 
    {
        res.status(200).json({ body: "Your data has been receieved succesfully.", data: resp });
    }).catch((err) => {
        res.status(400).json({ error: "You are facing an error" + err })
    });
}

module.exports = businessCtrl;