const mongoose = require('mongoose')

// const connectDB = (url) => {
//   return connect(url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
// }

const connectDB = (url) => {
  return mongoose.connect(url)
}

module.exports = connectDB
