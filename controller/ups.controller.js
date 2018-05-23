

var UPS = require('../models/ups.js');




exports.addUPS = async (req, res) => {
    console.log(req.body.country);


    try {
        var newUPS = new UPS({
            input: {
                power: req.body.power,
                batteryRuntime: req.body.batteryruntime,
                upsType: req.body.upsT,
                region: req.body.region,
                country: req.body.country,
                bypass: req.body.bypass,
                redundancyUnit: req.body.redUnit,
                pf: req.body.pf
            },

            output: {
                nameUPS: req.body.UPSname,
                voltage: req.body.voltage,
                upsCount: req.body.upsC
            }
        })

        var savedUPS = await newUPS.save();
        // return savedUPS;


    }catch(e) {
        throw Error("error in creating data:" +e);
    }


}