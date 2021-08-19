const mongoose = require('../db/connection');

const { Schema } = mongoose

const songSchema = new Schema(
    {
      title: { type: String, required: true },
      artist: { type: String, required: true }, 
      time: { type: String, required: true }
    }, 
    { timestamps: true }
)

const Songs = mongoose.model('Songs', songSchema);

module.exports = Songs;