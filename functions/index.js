// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PSfHBRqnYckXkxIexbbzMJoL3Y5XSouPGem6L7x0lrH2gi0Snamo0xM3MuGkwjY2fl6nrdVcEr6f4j7YQqoo0Za00IoZ0FQqJ"
);

//- API

//-APP Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// - API Routes
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payments request received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    anount: total,
    currency: "usd",
  });

  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// - List commands
exports.api = functions.HttpsError.onRequest(app);
