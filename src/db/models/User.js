import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

const UserSchema = new mongoose.Schema({
  fName: {
    type: String,
    minLength: 1,
    required: [true, 'name is a required field'],
    maxLength: [50, 'name field should have a max 35 characters'],
    trim: true,
  },
  lName: {
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

UserSchema.pre('save', async function hashPassword() {
  this.password = await bcryptjs.hash(
    this.password,
    await bcryptjs.genSalt(12)
  );
});

UserSchema.methods.createJWT = function createJWT() {
  return jwt.sign(
    {
      userId: this._id,
      userName: this.email,
      fName: this.fName,
      lName: this.lName,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRY,
    }
  );
};

UserSchema.methods.isAuthorized = async function isAuthorized(password) {
  const res = await bcryptjs.compare(password, this.password);
  return res;
};

export default mongoose.model('users', UserSchema);
