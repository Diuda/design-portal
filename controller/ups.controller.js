

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

exports.searchUPS = async (req, res) => {
    console.log(req.body.power);

    const params = getSearchParameter(req.body);

    console.log(params);
    var UPSName = await UPS.find(params);
    console.log(UPSName); 
    res.send(UPSName);
}


function getSearchParameter(obj){

    const params = {};

    Object.keys(obj).forEach((key)=>{
        if(key == "power")
            params["input.power"] = obj[key]
        if(key == "runtime")
            params["input.batteryRuntime"] = obj[key]
        if(key == "UPSType")
            params["input.upsType"] = obj[key]
        if(key == "Region")
            params["input.region"] = obj[key]
        if(key == "Country")
            params["input.country"] = obj[key]
        //TODO
        // need to handle this
        // if(key == "externalBypass")
        //     params["input.bypass"] = obj[key]
        if(key == "Runit")
            params["input.redundancyUnit"] = obj[key]
        if(key == "PowerFactor")
            params["input.pf"] = obj[key]
    })

    return params;
}