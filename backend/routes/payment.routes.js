const express=require("express");
const {
  getKey,
  checkout,
  paymentVerification,
} =require("../controllers/payment.js");

const paymentRouter = express.Router();

paymentRouter.post("/verification", paymentVerification);
paymentRouter.get("/key",getKey)
paymentRouter.post("/checkout", checkout);

module.exports= paymentRouter;