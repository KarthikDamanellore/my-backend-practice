const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const taskRoutes = require("./routes/taskRoute");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerDefinition = require("./swaggerDefinition/swaggerDefinition");
const swaggerUi = require("swagger-ui-express");

//Middleware
app.use((req, res, next) => {
    console.log("path " + req.path + " method " + req.method);
    next();
});

// swagger
const options = {
    swaggerDefinition,
    apis: ["./routes/taskRoute.js"], // Use the path to your route files
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

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
