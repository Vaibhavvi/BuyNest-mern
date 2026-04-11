const express = require("express");
const router = express.Router();

router.get("/", (req , res) => {
    res.send("This is the products page Welcome to Products !")
})

module.exports = router;