import { Schema, model } from "mongoose";
import { hash } from "bcrypt";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercasr: true,
      trim: true,
      validate: {
        validator: (email) => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
        message: "Invalid email address",
      },
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    role: {
      type: RoleType,
      enum: ["user", "owner", "admin"],
      default: "user",
    },
    isVerfied: {
      type: Boolean,
      default: false,
    },
    preferences: {
      location: String,
      budgetMin: Number,
      budgetMax: Number,
      gender: String,
    },
  },
  { timestamps: true }
);

UserSchema.pre("");

const User = model("User", UserSchema);

export default User;
