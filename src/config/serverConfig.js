const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT : process.env.PORT ,
    DB_URL : "mongodb://localhost/basics"
}