const express = require("express");
const router = express.Router();

const itemsController = require("../controllers/listItemsController");

router.post("/item/add", itemsController.add);
router.post("/item/update/:id", itemsController.update);
router.post("/item/delete/:id", itemsController.delete);
router.get("/getItems", itemsController.getAll);
router.get("/getNewItems", itemsController.getNew);

module.exports = router;
