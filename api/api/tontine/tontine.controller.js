const {
    deleteTontine,
    updateTontine,
    getTontineByTontineId,
    getTontine,
    createTontine,
    getTontineByTontineAndUserId,
    getTontineCreatedBy,
    getAllTontine,
    activerTontine,
    getUserTontine

} = require("./tontine.service");
const {
    createCompte,
} = require("../compte/compte.service");

module.exports = {
    createTontine: (req, res) => {
        const body = req.body;
        body.idUser = req.decoded.result.idUser;
        createTontine(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }
            if (results.affectedRows == 1) {
                compte = {
                    "idTontine": results.insertId,
                    "idUser": req.decoded.result.idUser,
                    "solde": 0,
                    "etat": 1,
                    "typeApprovisionnement": 0
                };

                createCompte(compte, (error, responses) => {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    return res.status(200).json({
                        success: 1,
                        data: responses
                    });

                });
            }

        });
    },
    getTontineByTontineId: (req, res) => {
        const id = req.params.id;
        getTontineByTontineId(id, (err, results) => {
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
    getTontineCreatedByUser: (req, res) => {
        const id = req.decoded.result.idUser;
        console.log(id);
        getTontineCreatedBy(id, (err, results) => {
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
    getTontineByTontineAndUserId: (req, res) => {
        const id = req.params.id;

        console.log("dans controller" + id);
        console.log(req.decoded.result.idUser);
        getTontineByTontineAndUserId(id, (err, results) => {
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
    getTontine: (req, res) => {
        getTontine((err, results) => {
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
    getAllTontine: (req, res) => {

        getAllTontine(req.decoded.result.idUser, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            //console.log(results);
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getUserTontine: (req, res) => {
        console.log(req.decoded.result.idUser);
        getUserTontine(req.decoded.result.idUser, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            //console.log(results);
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateTontine: (req, res) => {
        const body = req.body;
        updateTontine(body, (err, results) => {
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
    activerTontine: (req, res) => {
        const id = req.params.id;
        console.log(req.decoded.result.idUser)

        activerTontine(req.decoded.result.idUser, id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (results.affectedRows == 1) {
                return res.json({
                    success: 1,
                    message: "activation effectué"
                });
            } else {
                return res.json({
                    success: 0,
                    message: "Operation echoue"
                });
            }


        });
    },
    deleteTontine: (req, res) => {
        const data = req.body;
        deleteTontine(data, (err, results) => {
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
                message: "tontine deleted successfully"
            });
        });
    }
};