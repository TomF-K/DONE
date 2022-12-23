import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@nodeprojects.bdf9y.mongodb.net/DONE?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);

const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    // eslint-disable-next-line no-console
    console.log('conntected to db');
    return mongoose;
  } catch (error) {
    throw new Error(error);
  }
};

export { connectDb };
