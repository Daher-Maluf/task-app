const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
mongoose.connect(process.env.DATABASE_URL,  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
.then(() => console.log("Database connected"))
.catch((error) => console.log(error));

module.exports = mongoose;

