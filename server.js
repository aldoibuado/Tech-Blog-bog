// Requiring the dependencies
const path = require("path");
const express = require("express");
const session = require("express-session");


// Setting up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});