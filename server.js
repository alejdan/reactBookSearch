const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds151805.mlab.com:51805/heroku_7bbmz2q0");

// Start the API server
app.listen(process.env.PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
