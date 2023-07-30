const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONN).then( () => { console.log('conneced to the DB!') }).catch( (e) => {
    console.log(`connection error ${e}`);
});