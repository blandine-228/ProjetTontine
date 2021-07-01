const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
    createPeriode,
    getPeriodeById,
    getPeriode,
    updatePeriode,
    deletePeriode
} = require("./periodicite.controller");
router.get("/", getPeriode);
router.post("/", createPeriode);
router.get("/:id", getPeriodeById);
router.patch("/", updatePeriode);
router.delete("/", deletePeriode);

module.exports = router;