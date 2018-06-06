

var UPS = require('../models/ups.js');




exports.addUPS = async (req, res) => {



    try {
        var newUPS = new UPS({

            input: {
                powerKVA: req.body.power,
                voltageV:req.body.voltage,
                batteryRuntimeMin: req.body.batteryruntime,
                upsType: req.body.upsT,
                region: req.body.region,
                country: req.body.country,
                externalBypass: req.body.bypass,
                redundancyUnit: req.body.redUnit,
                pf: req.body.pf
            },

            output: {
                part: req.body.part
            }
        })

        var savedUPS = await newUPS.save();
        // return savedUPS;


    }catch(e) {
        throw Error("error in creating data:" +e);
    }


}

exports.searchUPS = async (req, res) => {

    const params = getSearchParameter(req.body);
    var UPSName = await UPS.find(params);
    res.send(UPSName);
}


function getSearchParameter(obj){

    const params = {};

    Object.keys(obj).forEach((key)=>{
        if(key == "power")
            params["input.powerKVA"] = obj[key]
        if(key == "runtime")
            params["input.batteryRuntimeMin"] = obj[key]
        if(key == "UPSType")
            params["input.upsType"] = obj[key]
        if(key == "Region")
            params["input.region"] = obj[key]
        if(key == "Country")
            params["input.country"] = obj[key]
        if(key == "Bypass")
            params["input.externalBypass"] = obj[key]
        if(key == "RUnit")
            params["input.redundancyUnit"] = obj[key]
        if(key == "PowerFactor")
            params["input.pf"] = obj[key]
        if(key == "voltage")
            params["input.voltageV"] = obj[key]
        if(key == "roomZone")
            params["roomZoneId"] = obj[key]        

    })

    return params;
}
