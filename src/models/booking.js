import mongoose, { Schema, model } from "mongoose";

const bookingSchema = new Schema({
  rental: {
    type: Schema.Types.ObjectId,
    ref: "RentSpace",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  },
});

const Booking = model("Booking", bookingSchema);

export default Booking;
