const express = require('express')
const router = express.Router()
const Listing = require('../models/listing.js')

router.get('/profile', async (req, res) => {
    try {
      const myListings = await Listing.find({
        owner: req.session.user._id,
      }).populate('owner')
      const myFavoriteListings = await Listing.find({
        favoritedByUsers: req.session.user._id
      }).populate('owner')

      res.render('users/show.ejs', {
        myListings,
        myFavoriteListings,
      })
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})

module.exports = router