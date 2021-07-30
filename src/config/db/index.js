const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

async function connect(DB) {
    try {
        await mongoose.connect(DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Database connected!!!")
    } catch (e) {
        console.log(e)
        console.log("Fail to connect to database!!!")
    }
}



module.exports = { connect }