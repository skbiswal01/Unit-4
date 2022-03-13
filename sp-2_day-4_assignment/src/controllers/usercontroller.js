const path = require("path");

const express = require("express");

const transporter = require("../configs/mail");

const User = require("../models/user.model");

const router = express.Router();


router.get("/", async (req, res) => {
  try {
   
    const page = req.query.page || 1;
    const pagesize = req.query.pagesize || 10; // 30


    const skip = (page - 1) * pagesize; 

    const users = await User.find()
      .skip(skip) // 30
      .limit(pagesize) // 31 - 60
      .lean()
      .exec();

    const totalPages = Math.ceil(
      (await Product.find().countDocuments()) / pagesize
    );

    return res.status(200).send({ users, totalPages });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    transporter.sendMail({
        from: '"Amazon admin" <admin@amazon.com>', 
        to: user.email, 
        subject: `Welcome to ABC system ${user.first_name} ${user.last_name}`, 
        text: `Hi ${user.first_name}, Please confirm your email address create a set of admins `, 
        
        alternatives: [
          {
            contentType: "text/html",
            path: path.join(__dirname, "../mailers/user-created.mail.html"),
          },
          {
            filename: "user.txt",
            path: path.join(__dirname, "../mailers/user-detail.txt"),
          },
        ],
    });

    return res.status(201).send({ message: "user registered successfully" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
