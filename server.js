// Requiring the dependencies
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");





// Setting up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// will set up Handelbars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
