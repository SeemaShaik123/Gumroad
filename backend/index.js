
// const express = require('express');

// const router = express.Router();

// module.exports = router;
const express = require("express");
const rootRouter = require("./routes/RouterIndex");
const cors = require("cors");
const app = express();

app.use(cors())

app.use(express.json());
app.use("/api/v1", rootRouter);

// api/v1/user/signin

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});