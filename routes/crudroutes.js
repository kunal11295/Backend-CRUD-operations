import express from "express";
import { addmiddleware, deletemiddleware, getproductmiddleware, registration, updatemiddleware } from "../middleware/authmiddleware.js";
import { register } from "../Controller/UserController.js";
import {createProduct, deleteProduct, getAllProducts, getProductById, updateProduct}  from "../Controller/ProductController.js"




var router = express.Router();

router.post('/registration',registration,register);
router.post('/create-Product',addmiddleware,createProduct)
router.post('/get-AllProducts',getproductmiddleware,getAllProducts)
router.get('/get-ProductById',getProductById)
router.post('/update-Product',updatemiddleware,updateProduct)
router.post('/delete-Product',deletemiddleware,deleteProduct)



 export default router;