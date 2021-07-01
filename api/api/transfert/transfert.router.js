const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
    rechargerCompteClient,
    debiterCompteClient,
    getTransfert
} = require("./transfert.controller");

router.post("/recharge", checkToken, rechargerCompteClient);
router.post("/debiter", checkToken, debiterCompteClient);
router.get("/", checkToken, getTransfert);

module.exports = router;