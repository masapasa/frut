const nodemailer = require ('nodemailer')
let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'frutfrutfrut0@gmail.com',
    pass: process.env.PASS 
  }
});
module.export = transporter
