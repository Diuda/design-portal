var fs = require('fs');

var csv = require('csvtojson')

var mongoose = require('mongoose');

var UPS = require('./models/ups.js');


var p, btR, upsType, region, c, b, rU, pwf, v, rz;
exports.addDataToMongo = async () => {

    console.log("hello")
    csv()
    .fromFile("./data/test3.csv")
    .then(async (jsonObj)=>{
        console.log(jsonObj.length)
        var temp1 = jsonObj[0].RzId
        var tCountry = jsonObj[0].CtryId
        var tRegion = jsonObj[0].RgDesc
        for(i=0; i<60000;i++){

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
                    continue
                }

            }
        // }
        }
    })

}


exports.addComponent = async () => {

    csv()
    .fromFile('./data/test4.csv')
    .then((jsonObj) => {
        console.log("File read")
        for(i=150000; i<200000; i++){

            var parts = {"name": jsonObj[i].CmpPartNum, "count": parseInt(jsonObj[i].RcQuantity)}
            
            UPS.findOneAndUpdate( {roomZoneId: jsonObj[i].RzId}, { $push: { 'output.parts' : parts } }  , (err, data) => {
                if (err) console.log(err);
                console.log(data)
            })
        }

  

   
    })




}