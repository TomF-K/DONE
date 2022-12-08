import mongoose from 'mongoose';

const todoModel = new mongoose.Schema({
  name: {
    type: String,
    minLength: 1,
    required: [true, 'name is a required field'],
    maxLength: [35, 'name field should have a max 35 characters'],
    trim: true,
  },
  description: {
    type: String,
    maxLength: [140, 'description field should have a max 140 characters'],
  },
  status: {
    type: String,
    uppercase: true,
    enum: ['IDLE', 'PENDING', 'COMPLETE'],
    default: 'IDLE',
  },
  userId: { type: String, required: true },
});

export default mongoose.model('todos', todoModel);
