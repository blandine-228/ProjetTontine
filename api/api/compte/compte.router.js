const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
    createCompte,
    getCompteByID,
    getCompte,
    updateCompte,
    deleteCompte,
    createCompteForTontine,
    getCompteByUserIdTontineId,
    getAllUserCompteWithLibelle,
    getCompteIdUSerByTontineId
} = require("./compte.controller");
router.get("/", checkToken, getCompte);
router.get("/allCompte/", checkToken, getAllUserCompteWithLibelle);
router.get("/find/", checkToken, getCompteByUserIdTontineId);
router.get("/add/:id", checkToken, createCompteForTontine);
router.post("/", checkToken, createCompte);
router.get("/:id", checkToken, getCompteByID);
router.get("/userId/:id", checkToken, getCompteIdUSerByTontineId);
router.patch("/", checkToken, updateCompte);
router.delete("/", checkToken, deleteCompte);

module.exports = router;