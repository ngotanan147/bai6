require('dotenv').config();
const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')
const db = require('./config/db')
db.connect(process.env.STR_CONNECT)
const route = require('./routes/index.js')

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
app.set('views', path.join(__dirname, 'resources', 'views'))
//

app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`)
})

