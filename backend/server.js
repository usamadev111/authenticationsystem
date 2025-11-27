import express from "express";
// import dotenv from "dotenv";
import "dotenv/config";
import connectDB from "./config/db.js";
// importing routes
import routes from "./routes/user.js";
// dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/v1", routes);

const port = process.env.PORT || 5000;
// console.log(port);

app.listen(port, async () => {
  await connectDB();
  console.log(`Server running at port ${port}`);
});
