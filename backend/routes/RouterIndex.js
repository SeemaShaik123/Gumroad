
const express = require('express');
const router = express.Router();

const userRouter=require("./user");
const productRouter = require('./product');
const marketplaceRouter = require('./marketplace');
const imageUploadRouter = require('./Imageupload');

router.use("/user",userRouter)
router.use('/product',productRouter);
router.use('/marketplace',marketplaceRouter);
router.use('/image',imageUploadRouter);
module.exports = router;