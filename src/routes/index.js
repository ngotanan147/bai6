const bodyParser = require('body-parser')
const customerRouter = require('./customer.js')

function route(app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use('/', customerRouter)

}

module.exports = route;