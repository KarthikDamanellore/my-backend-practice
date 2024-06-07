const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRoute");
const userRoutes = require("./routes/userRoute");
const eventRoutes = require("./routes/eventRoute");
const uploadRoutes = require("./routes/uploadRoutes");

app.use(cors());

//Middleware
app.use((req, res, next) => {
    console.log("path " + req.path + " method " + req.method);
    next();
});

// app.use(express.json());
// Use bodyParser to handle larger payloads
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// DB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(
                "DB connected Successfully and listening to " + process.env.PORT
            );
        });
    })
    .catch((error) => console.log(error));

app.use("/api/tasks", taskRoutes);
app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/upload", uploadRoutes);
