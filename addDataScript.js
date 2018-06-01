var fs = require('fs');
// var csv = require('fast-csv'); 

var csv = require('csvtojson')

var mongoogse = require('mongoose');

var UPS = require('./models/ups.js');


var p, btR, upsType, region, c, b, rU, pwf, v, rz;
exports.addDataToMongo = async () => {

    console.log("hello")
    csv()
    .fromFile("allComponents.csv")
    .then((jsonObj)=>{
        console.log(jsonObj.length)
        res.send("done")
        var temp1 = jsonObj[0].RzId
        var tCountry = jsonObj[0].CtryId
        var tRegion = jsonObj[0].RgDesc
        for(i in jsonObj){
            // console.log(data[0])
            if(temp1 == jsonObj[i].RzId){
                if(jsonObj[i].EvId == 22){
                    upsType = jsonObj[i].RzevValue.split(" ", 2).join(" ")
                    var t = jsonObj[i].RzevValue.split(" ", 3)
                    p = t[2]
                    continue
                }
                else if(jsonObj[i].EvId == 33){
                    v = jsonObj[i].RzevValue
                    continue
                }
                else if(jsonObj[i].EvId == 100){
                    pwf = jsonObj[i].RzevValue
                    continue
                }
                else if(jsonObj[i].EvId == 101){
                    btR = jsonObj[i].RzevValue
                    continue
                }
                else if(jsonObj[i].EvId == 102){
                    b = jsonObj[i].RzevValue
                    continue
                }
                else if(jsonObj[i].EvId == 103){
                    rU = jsonObj[i].RzevValue
                    continue
                }            

            }
            else {
                rz = temp1;
                temp1 = jsonObj[i].RzId;
                c = tCountry;
                tCountry = jsonObj[i].CtryId
                region = tRegion;
                tRegion = jsonObj[i].RgDesc

                var addUPS = new UPS({
                    roomZoneId: rz,
                    input: {
                        power: p,
                        voltage: v,
                        batteryRuntime: btR,
                        upsType: upsType,
                        region: region,
                        country: c,
                        bypass: b,
                        redundancyUnit: rU,
                        pf: pwf
                    }
                })
                await addUPS.save();


                if(jsonObj[i].EvId == 22){
                    upsType = jsonObj[i].RzevValue.split(" ", 2).join(" ")
                    var t = jsonObj[i].RzevValue.split(" ", 3)
                    p = t[2]
                    continue
                }

            }
        }
    })

}