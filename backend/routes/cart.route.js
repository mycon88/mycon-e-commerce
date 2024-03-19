import express from 'express';
import {
    addToCart,
    updateCart,
    getCart,
    removeProduct,
    clearCart,
} from '../controllers/cartController.js'
const router = express.Router();

router.post("/add-to-cart", addToCart);
router.get("/get-cart", getCart);
router.post("/update-cart", updateCart);
router.patch("/:productId/remove-from-cart", removeProduct)
router.put("/clear-cart", clearCart);



export default router;