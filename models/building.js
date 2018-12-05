const mongoose = require('mongoose');

const buildingSchema = mongoose.Schema({
  name: { type: String, required: 'This field is required' },
  architect: { type: String, required: 'This field is required' },
  yearBuilt: {
    from: { type: Number, required: 'This field is required' },
    to: Number
  },
  description: String,
  style: {type: String, enum: ['new', 'old']},
  icon: String,
  gallery: [{
    image: String,
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    timestamps: true}],
  location: {
    lat: { type: Number, required: 'This field is required' },
    lng: { type: Number, required: 'This field is required' }
  },
  address: String,
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [{
    content: String,
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    timestamps: true
  }],
  likes: [{ type: mongoose.Schema.ObjectId, ref: 'User'}]
});

const buildingModel = mongoose.model('Building', buildingSchema);
module.exports = buildingModel;