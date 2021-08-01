require('dotenv').config();
const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')
const db = require('./src/config/db')
db.connect(process.env.STR_CONNECT)
const route = require('./src/routes/index.js')
const port = process.env.PORT || 3000
const app = express()
route(app)

//Static config
app.use(express.static(path.join(__dirname, 'public')))

//

//Handlebars setup
app.engine('hbs', handlebars({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src', 'resources', 'views'))
//,

app.listen(port, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// "start": "nodemon --inspect src\\index.js",