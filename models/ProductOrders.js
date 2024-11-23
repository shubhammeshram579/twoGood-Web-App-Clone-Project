const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  products: [
    {
      productName: { type: String, required: true },
      pImage: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    }
  ],
  amount: { type: Number ,required: true },
  paymentId: { type: String,required: true},
  orderId: { type: String ,required: true},
  status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model('ProductOrders', orderSchema);
