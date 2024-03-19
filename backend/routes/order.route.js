import express from 'express';
import {
    checkout,
    myOrders,
    allOrders,  
} from '../controllers/orderController.js'
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.post("/checkout", checkout)

router.get("/my-orders", myOrders);

router.get("/all-orders", verifyToken, allOrders)


export default router;