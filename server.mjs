// Server for microservice
// Adapted from CS290 Assignment 5 starter code
// Date: November 2022
// Author: Pam Van Londen

import "dotenv/config";
import express from "express";
import asyncHandler from "express-async-handler";
import fetch from "node-fetch";

const PORT = process.env.PORT;
if (port == null || port == ""){
  port = 8000;
};

const app = express();

app.use(express.static("public"));

const API = "https://randomuser.me/api/";

//  Define variables for the middleware counting.
let count = 0;
const INTERVAL = 10;

app.use("/random-person", logCounts, (req, res, next) => {
  next();
});

// call the Random Person API
app.get(
  "/random-person",
  asyncHandler(async (req, res) => {
    const resp = await fetch(API);
    const data = await resp.json();
    res.send(data);
  })
);

// The statistics must be printed to the console running the Express app after the 10th request
function logCounts(req, res, next) {
  count += 1;
  if (count % INTERVAL === 0)
    console.log(`Total requests for random-person: ${count}`);
  next();
}
// Respond using an error handler middleware function when it doesn't work.
app.use((error, req, res, next) => {
  console.log(`Unhandled error ${error}. URL: ${req.originalUrl}`);
  res.status(500).send({ error: `500 - Server Error.` });
});

// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
