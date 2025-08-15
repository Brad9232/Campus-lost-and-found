const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Item name is required"] 
  },
  description: { 
    type: String, 
    required: [true, "Description is required"] 
  },
  locationFound: { 
    type: String, 
    required: [true, "Location is required"] 
  },
  dateFound: { 
    type: Date, 
    default: Date.now 
  },
  image: { 
    type: String  
  },
  status: { 
    type: String, 
    enum: ["Pending", "Approved", "Claimed", "Archived"], 
    default: "Pending" 
  },
  submittedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
});

module.exports = mongoose.model('Item', ItemSchema);