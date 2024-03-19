import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   name: {
        type: String,
        required: true,
        unique: true,

    },
    description: {
        type: String,
        required: true,  
        unique: true,      
    },
    price: {
        type: String,
        required: true,
    }, 
    isActive: {
        type: Boolean,
        default: false,
      },
}, {timestamps: true}
);

const Product = mongoose.model('Product', productSchema);

export default Product;