var fs = require('fs');
// var csv = require('fast-csv'); 

var csv = require('csvtojson')

var mongoogse = require('mongoose');


var p, btR, upsType, region, c, b, rU, pwf, v;
exports.addDataToMongo = () => {

    console.log("hello")
    csv()
    .fromFile("allComponents.csv")
    .then((jsonObj)=>{
        console.log(jsonObj.length)
        res.send("done")
        var temp1 = jsonObj[0].RzId
        for(i in jsonObj){
            // console.log(data[0])
            if(temp1 == jsonObj[i].RzId){
                if(jsonObj[i].EvId == 22){
                    upsType = jsonObj[i].RzevValue.split(" ", 2).join(" ")
                    var t = jsonObj[i].RzevValue.split(" ", 3)
                    p = t[2]
                }
                else if(jsonObj[i].EvId == 33){
                    v = jsonObj[i].RzevValue
                }
                else if(jsonObj[i].EvId == 100){
                    pwf = jsonObj[i].RzevValue
                }
                else if(jsonObj[i].EvId == 101){
                    btR = jsonObj[i].RzevValue
                }
                else if(jsonObj[i].EvId == 102){
                    b = jsonObj[i].RzevValue
                }
                else if(jsonObj[i].EvId == 103){
                    btR = jsonObj[i].RzevValue
                }

            }
            var addUPS = new addUPS({
                input: {
                    country: data.
                }
            })
        }
    })

}