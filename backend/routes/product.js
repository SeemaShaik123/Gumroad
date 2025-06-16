//backend/routes/product.js
const express = require('express');
const {Product} = require('../db');

const { authMiddleware } = require('../middlewares/AuthMiddleware'); // Add this line
const router = express.Router();


//creating product-post
// router.post('/create-product/:userId', async (req, res) => {
//     const body = req.body;
//     const userId = req.params.userId;
//     if(!body){
//         return res.status(400).json({
//             message: "Please provide product details"
//         });
//     }
//     const product = await Product.create({
//         userId : userId,
//         products : body.products
//     });
//     if(!product){
//         return res.status(500).json({
//             message: "Product creation failed"
//         });
//     }
//     res.status(201).json({
//         message: "Product created successfully",
//         product
//     });
// });

//creating new product-put
router.put('/new-product', authMiddleware ,async (req, res) => {
    try {
        const body = req.body;
        const id  = req.userId;  
        if (!body) {
            throw new Error("Request body is missing");
        }
        const product = await Product.findOne({ userId: id });
        if (!product) {
            return res.status(404).json({ message: "User not found" });
        }
        product.products.push(body);
        await product.save();
        res.json({
            message: "products updated successfully",
            product,
        });
    } catch (error) {
        console.error("Error updating the Products:", error.message);
        res.status(500).json({
            message: "An error occurred while updating the Products",
            error: error.message,
        });
    }
});

//update product-put
router.put('/update-product/:productId',authMiddleware, async (req, res) => {
    const userId = req.userId;
    const productId  = req.params.productId;
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            message: "Request Body is missing"
        });
    }
    const userProduct = await Product.findOne({ userId: userId });
    if (!userProduct) {
        return res.status(404).json({ message: "user not found" });
    }
    const product = userProduct.products.id(productId);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    product.productName = body.productName || product.productName;
    product.productDescription = body.productDescription || product.productDescription;
    product.price = body.price || product.price;
    product.published = body.published || product.published;
    await userProduct.save();
    res.json({
        message: "Product updated successfully",
        product,
    });
}); 

// delete
router.delete('/delete-product/:productId',authMiddleware, async (req, res) => {
    const userId = req.userId;
    const productId  = req.params.productId;
    const userProduct = await Product.findOne({ userId: userId });
    if (!userProduct) {
        return res.status(404).json({ message: "user not found" });
    }
    const product = userProduct.products.id(productId);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    userProduct.products.remove(product);

    await userProduct.save();
    res.json({
        message: "Product deleted successfully",
        product,
    });
})


// retriveing all products
router.get('/bulk',authMiddleware, async (req, res) => {
    try {
        const id  = req.userId;  
        const userProducts = await Product.findOne({ userId: id });
        if (!userProducts) {
            return res.status(404).json({ message: "No user products found" });
        }
        res.json({
            message: "User Products fetched successfully",
            userProducts: userProducts.products,
        });
    } catch (error) {
        console.error("Error fetching user Products:", error.message);
        res.status(500).json({
            message: "An error occurred while fetching the User Products",
            error: error.message,
        });
    }
})

module.exports = router;

