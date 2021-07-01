const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
    createProfil,
    getProfilByProfilId,
    getProfil,
    updateProfil,
    deleteProfil,
    deleteProfilWithId
} = require("./profil.controller");
router.get("/", checkToken, getProfil);
router.post("/", createProfil);
router.get("/:id", getProfilByProfilId);
router.patch("/", updateProfil);
router.delete("/delete/:id", deleteProfil);
router.get("/delete/:id", deleteProfilWithId);

module.exports = router;