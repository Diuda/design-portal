var fs = require('fs');
// var csv = require('fast-csv'); 

var csv = require('csvtojson')

var mongoogse = require('mongoose');

var UPS = require('./models/ups.js');


var p, btR, upsType, region, c, b, rU, pwf, v, rz;
exports.addDataToMongo = async () => {

    console.log("hello")
    csv()
    .fromFile("test3.csv")
    .then(async (jsonObj)=>{
        console.log(jsonObj.length)
        var temp1 = jsonObj[0].RzId
        var tCountry = jsonObj[0].CtryId
        var tRegion = jsonObj[0].RgDesc
        for(i in jsonObj){

            if(temp1 == jsonObj[i].RzId){
                if(jsonObj[i].EvId == 22){
                    upsType = jsonObj[i].RzevValue.split(" ", 2).join(" ")
                    var t = jsonObj[i].RzevValue.split(" ")
                    p = parseInt(t[t.length-1].slice(0, -3))
                    continue
                }
                else if(jsonObj[i].EvId == 33){
                    v = parseInt(jsonObj[i].RzevValue.slice(0, -1))
                    continue
                }
                else if(jsonObj[i].EvId == 100){
                    pwf = jsonObj[i].RzevValue
                    continue
                }
                else if(jsonObj[i].EvId == 101){
                    btR = parseInt(jsonObj[i].RzevValue.slice(0, -3))
                    continue
                }
                else if(jsonObj[i].EvId == 102){
                    if(jsonObj[i].RzevValue == 'External'){
                        b = true;
                    }
                    else{
                        b = false;
                    }
                    continue
                }
                else if(jsonObj[i].EvId == 103){
                    rU = jsonObj[i].RzevValue
                    continue
                }            

            }
            else {
                console.log('Else Working')
                rz = temp1;
                temp1 = jsonObj[i].RzId;
                c = tCountry;
                tCountry = jsonObj[i].CtryId
                region = tRegion;
                tRegion = jsonObj[i].RgDesc


                console.log("power: "+p+" voltage: "+v+" btr: "+btR+" upsType: "+upsType+" region: "+region+" country: "+c+" externalBypass: "+b+" redundancy: "+rU+ "pf: "+pwf)
                // console.log("powertype: "+(typeof p)+ "volatge type: "+(typeof v))
                console.log("Voltage: "+v)
                var addUPS = new UPS({
                    roomZoneId: rz,
                    input: {
                        powerKVA: p,
                        voltageV: v,
                        batteryRuntimeMin: btR,
                        upsType: upsType,
                        region: region,
                        country: c,
                        externalBypass: b,
                        redundancyUnit: rU,
                        pf: pwf
                    }
                })
                 var UPSadd = await addUPS.save();
                console.log(UPSadd)

                if(jsonObj[i].EvId == 22){
                    upsType = jsonObj[i].RzevValue.split(" ", 2).join(" ")
                    var t = jsonObj[i].RzevValue.split(" ")
                    p = parseInt(t[t.length-1].slice(0, -3))
                    // console.log(t)
                    // console.log(p)
                    // console.log(typeof p)
                    continue
                }

            }
        // }
        }
    })

}


exports.addComponent = async () => {

    csv()
    .fromFile('test4.csv')
    .then(async (jsonObj) => {
        console.log("File read")
        for(i=100000;i<jsonObj.length;i++){
        // jsonObj.forEach(async (e) => {
            // console.log(e.RzId)
            // if(e.RzId == '307647'){
            var parts = {"name": jsonObj[i].CmpPartNum, "count": parseInt(jsonObj[i].RcQuantity)}
            // console.log(parts)
           await UPS.findOneAndUpdate( {roomZoneId: jsonObj[i].RzId}, { $push: { 'output.part' : parts } }  , (err, data) => {
                console.log("working")
                console.log(parts)
                if (err) console.log(err);
                console.log(data)
            })
        }
            // }
        // })
        
    })

}