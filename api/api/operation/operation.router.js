const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
    createOperation,
    getOperationByOperationId,
    getOperation,
    updateOperation,
    deleteOperation,
    getOperationByUserAndType,
    cositser,
    getUserOperationByTontineId
} = require("./operation.controller");
router.get("/", getOperation);
router.get("/byref/:ref", checkToken, getOperationByUserAndType);
router.get("/userOperationByTontine/:id", checkToken, getUserOperationByTontineId);
router.post("/", checkToken, createOperation);
router.post("/cositser", checkToken, cositser);
router.post("/situation/", createOperation);
router.get("/:id", getOperationByOperationId);
router.patch("/", updateOperation);
router.delete("/", deleteOperation);

module.exports = router;