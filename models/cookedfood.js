var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validate = require('mongoose-validator');

// Add location validators
var cityValidator = [
    validate({
        validator: 'isLength',
        arguments: [2, 50],
        message: 'City name should be between {ARGS[0]} and {ARGS[1]} characters'
    })
];

var stateValidator = [
    validate({
        validator: 'isLength',
        arguments: [2, 50],
        message: 'State name should be between {ARGS[0]} and {ARGS[1]} characters'
    })
];

var cookedfoodSchema = new Schema( {
    meal: {
        type: String,
        required: true
    },
    people: {
        type: Number,
        required: true,
        min: [1, 'Number of people must be at least 1']
    },
    city: {
        type: String,
        required: true,
        validate: cityValidator
    },
    state: {
        type: String,
        required: true,
        validate: stateValidator
    },
    // Add geocoding support for better location tracking
    location: {
        type: {
            latitude: Number,
            longitude: Number
        },
        required: false
    },
    address: {
        type: String,
        required: false
    },
    postedby: {
        type: String,
        required: true
    },
    requeststatus: {
        type: Boolean,
        default: false,
        required: true
    },
    acceptedby: {
        type: String,
        default: 'none'
    },
    // Add expiration date for food safety
    expiryDate: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Cookedfood',cookedfoodSchema);
