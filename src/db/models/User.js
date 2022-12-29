import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  f_name: {
    type: String,
    minLength: 1,
    required: [true, 'name is a required field'],
    maxLength: [50, 'name field should have a max 35 characters'],
    trim: true,
  },
  l_name: {
    type: String,
    minLength: 1,
    required: [true, 'name is a required field'],
    maxLength: [50, 'name field should have a max 35 characters'],
    trim: true,
  },
  password: {
    type: String,
    minLength: 8,
    required: [true, 'password is a required field'],
  },
  email: {
    type: String,
    minLength: 5,
    required: [true, 'email is a required field'],
    maxLength: [50, 'email field should have a max 35 characters'],
    trim: true,
    unique: [true, 'email address already registered'],
  },
});

export default mongoose.model('users', UserSchema);
