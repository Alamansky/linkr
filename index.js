const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

// define routes
app.use("/", require("./routes/index"));
app.use("/api/url/", require("./routes/url"));

const PORT = 80;

app.listen(PORT, () => console.log(`server running on ${PORT}`));
