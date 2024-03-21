import express from 'express';
import { 
    searchByName,
    searchByPrice,
    addProduct,
    getAllProducts,
    getActiveProducts,
    getProduct,
    updateProduct,
    archiveProduct,
    activateProduct,
} from '../controllers/productController.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get("/searchByName", searchByName);

router.get("/searchByPrice", searchByPrice);


router.post("/add", verifyToken, addProduct);

router.get("/all", verifyToken, getAllProducts);

router.get("/", getActiveProducts);

router.get("/:productId", getProduct);

router.patch("/:productId/update", verifyToken, updateProduct);

router.patch("/:productId/archive", verifyToken, archiveProduct);

router.patch("/:productId/activate", verifyToken, activateProduct);




export default router;