const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose.connect(DB,{
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify:false
}).then(() => {
console.log(`Connection Sucessfull`)
}).catch((err) => console.log(`no Connection`));