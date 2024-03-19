import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User ID is required"]
  },
  productsOrdered: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        required: [true, "Product ID is required"]
      },
      quantity: {
        type: Number,
        default: 1
      },
      subtotal: {
        type: Number,
        required: [true, "Subtotal is required"]
      }
    }
  ],
  totalPrice: {
    type: Number,
    required: [true, "Total price is required"]
  },
  orderedOn: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: "Pending"
  }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;