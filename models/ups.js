var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var upsSchema = new Schema({

    roomZoneId: { type: String },

    input: {    

        powerKVA: { type: Number },
        voltageV: { type: Number },
        batteryRuntimeMin: { type: Number },
        upsType: { type: String }, 
        region: { type: String},
        country: { type: String },
        externalBypass: { type: Boolean},
        redundancyUnit: { type: String },
        pf: { type: String }
        
    },
    output: {
        parts: [{
            name: { type: String },
            count: { type: Number }
        }]

    }

})

const ups = mongoose.model('upsmain', upsSchema)

module.exports = ups;