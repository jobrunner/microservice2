const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  apiSecret: process.env.API_SECRET || "static123",
  port: process.env.PORT || 3001,
  thanks: process.env.THANKS_MESSAGE || ""
};