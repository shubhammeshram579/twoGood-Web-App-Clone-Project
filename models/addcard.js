// models/Cart.js
const mongoose = require('mongoose');

const cartSchema =  mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    }
  ],
  totalAmount: { type: Number, required: true, default: 0 },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});



// / Function to calculate the total amount in the cart
const calculateTotalAmount = (cart) => {
    let totalAmount = 0;
    cart.products.forEach(product => {
        totalAmount += product.quantity * product.productId.pPrice; // Assumes pPrice is the price of the product
    });
    return totalAmount;
};

// Middleware or function to update the total amount in the cart before saving
cartSchema.pre('save', function(next) {
    this.totalAmount = calculateTotalAmount(this);
    next();
});

module.exports = mongoose.model('Cart', cartSchema);
