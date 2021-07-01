require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const profilRouter = require("./api/profil/profil.router");
const periodiciteRouter = require("./api/periodicite/periodicite.router");
const compteRouter = require("./api/compte/compte.router");
const tirageRouter = require("./api/tirage/tirage.router");
const tontineRouter = require("./api/tontine/tontine.router");
const operationRouter = require("./api/operation/operation.router");
const transfertRouter = require("./api/transfert/transfert.router");
const cors = require('cors');

app.use(express.json());
app.use(cors());
 
app.use("/api/users", userRouter);
app.use("/api/tontine", tontineRouter);
app.use("/api/operation", operationRouter);
app.use("/api/profil", profilRouter);
app.use("/api/compte", compteRouter);
app.use("/api/tirage", tirageRouter);
app.use("/api/transfert", transfertRouter);
app.use("/api/periodicite", periodiciteRouter);

const port = 3000;
app.listen(port, () => {
    console.log("server up and running on PORT :", port);
});