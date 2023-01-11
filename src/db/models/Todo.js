import mongoose from 'mongoose';

/* TODO 
name should be unique to user but not across entire database
*/

const todoModel = new mongoose.Schema(
  {
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
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export default mongoose.model('todos', todoModel);
