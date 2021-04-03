import express from "express";
import mongoose from "mongoose";

// App Config
const app = express();
const port = process.env.PORT || 3001;
const connection_url =
  "mongodb+srv://admin:13umYzqHo5zsxCJF@cluster0.vzmrq.mongodb.net/covidcompaniondb?retryWrites=true&w=majority";

// Middlewares

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World!"));

// Need a post req to pass in data to the db //

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
