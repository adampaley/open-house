// import
const mongoose = require('mongoose')

// schema
const listingSchema = new mongoose.Schema({
    streetAddress: { type: String, required: true }, 
    city: { type: String, required: true },
    price: { type: Number, min: 0, required: true },
    size: { type: Number, min: 0, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    favoritedByUsers: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ]
})

// model
const Listing = mongoose.model('Listing', listingSchema)

// export
module.exports = Listing