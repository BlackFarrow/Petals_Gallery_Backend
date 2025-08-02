import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['photography', 'videography'],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: String,
  tags: [String],
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);
export default Service;
