const express = require("express");
const morgan = require("morgan");
//const router = require("./routes");

const server = express();

// MIDELWARES
server.use(morgan("dev"));
server.use(express.json());

server.use(require("./routes"));


module.exports = server;