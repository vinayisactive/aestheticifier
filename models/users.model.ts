import mongoose, { Schema, Document, Model } from "mongoose";

interface userSchema {
    name: string,
    email: string, 
    password: string,
}

interface userDocument extends userSchema, Document{}
interface userModel extends Model<userDocument>{}

const userSchema = new Schema<userDocument, userModel>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const users =mongoose.models.users || mongoose.model("users", userSchema);
