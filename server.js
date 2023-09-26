const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
dotenv.config();
const path = require("path");
app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
   console.log("MongoDB connected successfully");

    
  })
  .catch((error) => console.log(`${error} did not connect`));