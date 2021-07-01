const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
    createTirage,
    getTirage,
    getTirageById,
    updateTirage,
    deleteTirage,
    createTirages,
    getTirageDetailByIdTontine
} = require("./tirage.controller");
router.get("/", getTirage);
router.post("/", createTirage);
router.post("/all/", createTirages);
router.get("/:id", getTirageById);
router.get("/all/:id", getTirageDetailByIdTontine);
router.patch("/", updateTirage);
router.delete("/", deleteTirage);

module.exports = router;