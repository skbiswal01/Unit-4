const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false,
  auth: {
    user: "b271b0622de255", 
    pass: "baffeaa6248d12", 
  },
})