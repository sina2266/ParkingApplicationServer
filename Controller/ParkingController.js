const Parking = require('../Model/Parking');

const Mongoose = require('mongoose');
var DBHelper = require('../Helper/DBHelper');

let ParkingDBQuery = {
    addOrUpdateParking: function (ParkingData, callback) {
        DBHelper.Mongo.DBConnect();
        if (ParkingData.id)
            ParkingData._id = Mongoose.Types.ObjectId(ParkingData._id);
        else
            delete ParkingData.id;
        if (!ParkingData._id === undefined) {
            Parking.findById(ParkingData._id, ParkingData, function (Err, ParkingInserted) {
                if (Err) return callback(Err.message);
                return callback(null, ParkingInserted);
            });
        } else {

            const parkingInsert = new Parking(ParkingData);

            parkingInsert.save(function (err, mInsert) {
                if (err) return callback(err.message);
                return callback(null, mInsert);
            });
        }
    },
    getClosestParking: function (locationData, callback) {
        DBHelper.Mongo.DBConnect();
        Parking.find({
            location: {
                $near: {
                    $maxDistance: 1000,
                    $geometry: {
                        type: "Point",
                        coordinates: [locationData.lon, locationData.lat]
                    }
                }
            }
        }).find((error, results) => {
            if (error) return callback(error);
            callback(null,results[0]);
        });

    }
};


module.exports = ParkingDBQuery;
