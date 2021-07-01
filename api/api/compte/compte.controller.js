const {
    createCompte,
    getCompteByID,
    getCompte,
    updateCompte,
    deleteCompte,
    getCompteByCompteAndUserId,
    getCompteByUserIdTontineId,
    getAllUserCompte,
    getCompteIdUSerByTontineId
} = require("./compte.service");
const { sign } = require("jsonwebtoken");

module.exports = {
    createCompte: (req, res) => {
        const body = req.body;
        createCompte(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    createCompteForTontine: (req, res) => {
        const idTontine = req.params.id;
        const compte = {
            "idTontine": idTontine,
            "idUser": req.decoded.result.idUser,
            "solde": 0,
            "etat": 1,
            "typeApprovisionnement": 0
        };
        createCompte(compte, (error, responses) => {
            if (error) {
                return;
            }
            return res.status(200).json({
                success: 1,
                data: responses
            });

        });
    },

    getCompteByID: (req, res) => {
        const id = req.params.id;
        getCompteById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not Found"
                });
            }
            results.password = undefined;
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getCompteByUserAndTontinID: (req, res) => {
        const id = req.params.id;
        const idUser = req.decoded.result.idUser;
        getCompteByCompteAndUserId(id, idUser, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not Found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getCompte: (req, res) => {
        getCompte((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getCompteByUserIdTontineId: (req, res) => {
        const idTontine = req.params.id;
        const idUser = req.decoded.result.idUser;
        getCompteByUserIdTontineId(idUser, idTontine, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getAllUserCompteWithLibelle: (req, res) => {
        const idUser = req.decoded.result.idUser;
        getAllUserCompte(idUser, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getCompteIdUSerByTontineId: (req, res) => {
        const id = req.params.id;
        getCompteIdUSerByTontineId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    updateCompte: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateCompte(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },
    deleteCompte: (req, res) => {
        const data = req.body;
        deleteCompte(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record Not Found"
                });
            }
            return res.json({
                success: 1,
                message: "compte deleted successfully"
            });
        });
    }
};