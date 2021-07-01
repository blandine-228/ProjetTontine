const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
    createUser,
    login,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser,
    getUserInfo,
    getUserSolde
} = require("./user.controller");
router.get("/", getUsers);
router.get("/infos/", checkToken, getUserInfo);
router.get("/solde/", checkToken, getUserSolde);
router.post("/", createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;