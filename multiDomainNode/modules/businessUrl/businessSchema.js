var mon=require("mongoose");
mon.connect(process.env.DB_URL, { useNewUrlParser: true });

var businessStructure = new mon.Schema({
  userEmail: String,
  userBusinessName: String
});

var businessSchema = mon.model('users', businessStructure);

module.exports = businessSchema;