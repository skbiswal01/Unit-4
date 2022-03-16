const express = require("express");

const User = require("../models/user.model");

const { body, validationResult } = require("express-validator");

const router = express.Router();

router.post
("/", 
    body("first_name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First Name cannot be empty")
    .isLength({ min: 4 })
    .withMessage("First Name must be at least 4 characters"),
    body("last_name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Last Name cannot be empty")
    .isLength({ min: 4 })
    .withMessage("last Name must be at least 4 characters"),
    body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),
    body("age")
    .not()
    .isEmpty()
    .withMessage("Age cannot be empty")
    .isNumeric()
    .withMessage("Age must be a number between 1 and 100")
    .custom((value) => {
      if (value < 1 || value > 100) {
        throw new Error("Incorrect age provided");
      }
      return true;
    }),
    body("gender")
    .not()
    .isEmpty()
    .withMessage("gender cannot be empty"),
    body("Pincode")
    .not()
    .isEmpty()
    .withMessage("Pincode cannot be empty"),
    body("Pincode")
    .isNumeric()
    .isLength({min : 6 , max : 6}),
    async(req, res) => {
        try{
            console.log(body("firstName"));
            const errors = validationResult(req);
            console.log({ errors });
            if (!errors.isEmpty()) {
                return res.status(400).send({ errors: errors.array() });
            }
            const user = await User.create(req.body);
            return res.status(201).send(user);
        }catch(error){
            return res.status(500).send({ message: error.message });
        }
    }
)






module.exports = router;