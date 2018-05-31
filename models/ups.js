var mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;


var upsSchema = new Schema({

    roomZoneId: { type: String },

    input: {    

        power: { type: String },
        volatge: { type: String },
        batteryRuntime: { type: String },
        upsType: { type: String }, 
        region: { type: String},
        country: { type: String },
        bypass: { type: Boolean},
        redundancyUnit: { type: String },
        pf: { type: String }
        
    },
    output: {
        part: [{
            name: { type: String, required: true},
            count: { type: Number, required: true}
        }]

    }

})



// upsSchema.plugin(mongoosePaginate);

const ups = mongoose.model('ups', upsSchema)

module.exports = ups;