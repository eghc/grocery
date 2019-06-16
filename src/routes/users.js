const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/signUp", userController.signUp);
router.post("/logIn", userController.logIn);
router.get("/isAuth", userController.isAuthorized);
router.post("/logOut", userController.logOut);

module.exports = router;
