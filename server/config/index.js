require('dotenv').config();

let config;
if (process.env.NODE_ENV === "production") {
  
  config = {
    db: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      port: process.env.MYSQL_PORT
    },
    auth: {
      cookieSecret: process.env.COOKIE_SECRET,
    }   
  }

} else {

  config = {
    db: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      port: process.env.MYSQL_PORT
    },
    auth: {
      cookieSecret: process.env.COOKIE_SECRET,
    },
    stripe: {
      stripe_token: process.env.STRIPE_TEST_TOKEN
    }   
  }

} 

module.exports = config;