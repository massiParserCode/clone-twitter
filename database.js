const mongoose = require("mongoose");

// mongoose.set("useNewUrlParser", true);
// mongoose.set("useUnifiedTopology", true);
// mongoose.set("useFindAndModify", false);

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect("mongodb://localhost:27017/twitter-clone")
      .then(() => {
        console.log("database connection successful to twitter-clone");
      })
      .catch((err) => {
        console.log(`database error ${err}`);
      });
  }
}

module.exports = new Database();
