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
    default: Nepal,
  },
});

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
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
    images: [String],
    isAvilable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Property = model("Property", PropertySchema);

export default Property;
