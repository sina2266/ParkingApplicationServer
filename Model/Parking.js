const mongoose = require('mongoose');
var ParkingSchema =
    new mongoose.Schema({
            location: {
                type: { type: String },
                coordinates: [] // [longitude, latitude]
            },
            is_available: Boolean,
            is_for_disabled : Boolean,
            username : String
        },
        {
            timestamps: true,
            versionKey: false
        });
ParkingSchema.index({location:"2dsphere"});
var Parking = mongoose.model('Parking', ParkingSchema);

module.exports = Parking;
