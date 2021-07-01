const { checkToken } = require("../../auth/token_validation");
const {
    deleteOperation,
    updateOperation,
    getOperationByOperationId,
    getOperation,
    createOperation,
    getOperationByType,
    getUserOperationByTontineId


} = require("./operation.service");
const {
    updateUserAccount,
    updateUserAccountFromTontine
} = require("../users/user.service");
const {
    crediterTontine
} = require("../tontine/tontine.service");

const { sign } = require("jsonwebtoken");

module.exports = {


    createOperation: (req, res) => {
        const body = req.body;
        createOperation(body, (err, results) => {
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
    cositser: (req, res) => {
        const body = req.body;
        console.log(body);
        console.log(req.decoded.result.solde);
        console.log(body.montant);
        montant = body.montant;
        console.log(montant)
        idUser = req.decoded.result.idUser;
        updateUserAccount(idUser, montant, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }
            if (results.affectedRows == 1) {
                crediterTontine(montant, body.idTontine, (er, resp) => {
                    if (resp.affectedRows == 1) {
                        createOperation(body, (error, responses) => {
                                if (error) {
                                    console.log(error);
                                    return;
                                }
                                console.log(responses);
                                return res.status(200).json({
                                    success: 1,
                                    data: responses
                                });

                            }

                        );
                    }
                })

            } else {
                return res.status(200).json({
                    success: 0,
                    data: "Compte insuffisant"
                });
            }
        });
    },
    ramasser: (req, res) => {
        const body = req.body;
        montant = body.montant;
        tontine = body.idTontine;
        idUser = req.decoded.result.idUser;
        updateUserAccountFromTontine(idUser, montant, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }
            if (results.affectedRows == 1) {

                createOperation(body, (error, responses) => {
                    if (error) {
                        console.log(error);
                        return;
                    }

                    return res.status(200).json({
                        success: 1,
                        data: responses
                    });

                });
            } else {
                return res.status(200).json({
                    success: 0,
                    data: "Compte insuffisant"
                });
            }
        });
    },
    getOperationByOperationId: (req, res) => {
        const id = req.params.id;
        getOperationByOperationId(id, (err, results) => {
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
    getOperation: (req, res) => {
        getOperation((err, results) => {
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
    getUserOperationByTontineId: (req, res) => {

        getUserOperationByTontineId(req.decoded.result.idUser, req.params.id, (err, results) => {
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
    getOperationByUserAndType: (req, res) => {
        getOperationByType(req.decoded.result.idUser, req.params.ref, (err, results) => {
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
    updateOperation: (req, res) => {
        const body = req.body;
        updateOperation(body, (err, results) => {
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
    deleteOperation: (req, res) => {
        const data = req.body;
        deleteOperation(data, (err, results) => {
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
                message: "profil deleted successfully"
            });
        });
    }
};