const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
    createTontine,
    getTontineByTontineId,
    getTontine,
    updateTontine,
    deleteTontine,
    getTontineByTontineAndUserId,
    getTontineCreatedByUser,
    getAllTontine,
    activerTontine,
    getUserTontine
} = require("./tontine.controller");
router.get("/", getTontine);
router.get("/all/", checkToken, getAllTontine);
router.get("/allmytontine/", checkToken, getUserTontine);
router.post("/", checkToken, createTontine);
router.get("/:id", getTontineByTontineId);
router.get("/active/:id", checkToken, activerTontine);
router.get("/user/:id", checkToken, getTontineByTontineAndUserId);
router.get("/user/", checkToken, getTontineCreatedByUser);

router.patch("/", updateTontine);
router.delete("/", deleteTontine);

module.exports = router;