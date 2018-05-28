var mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;


var upsSchema = new Schema({



    input: {    

        power: { type: Number, required: true },
        batteryRuntime: { type: Number, required: true },
        upsType: { type: String, required: true }, 
        region: { type: String, required: true },
        country: { type: String, required: true },
        bypass: { type: Boolean, required: true },
        redundancyUnit: { type: Number, required: true, min:0, max:10 },
        pf: { type: Number, required: true, min:0, max:1 }
        
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