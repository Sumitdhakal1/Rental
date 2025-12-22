import { Schema, model } from "mongoose";

const addressSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    default: "Nepal",
  },
});

const rentSpaceSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: addressSchema,
    price: {
      type: Number,
      required: true,
    },
    areaSqFt: {
      type: Number,
    },
    bedrooms: {
      type: Number,
    },
    images: [String],
    isAvilable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const RentSpace = model("RentSpace", rentSpaceSchema);

export default RentSpace;
