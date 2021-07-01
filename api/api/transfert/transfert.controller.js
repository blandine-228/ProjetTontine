const {
    createTransfert,
    getTransfert
} = require("./transfert.service");

const {
    rechargeUserAccount,
    debiterUserAccount
} = require("../users/user.service");

module.exports = {
    rechargerCompteClient: (req, res) => {
        const body = req.body;
        body.idUser = req.decoded.result.idUser;
        createTransfert(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }
            if (results.affectedRows == 1) {

                rechargeUserAccount(body.idUser, body.solde, (error, responses) => {
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
    debiterCompteClient: (req, res) => {
        const body = req.body;
        body.idUser = req.decoded.result.idUser;
        createTransfert(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }
            if (results.affectedRows == 1) {

                debiterUserAccount(body.idUser, body.solde, (error, responses) => {
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
    getTransfert: (req, res) => {
        const body = req.body;
        idUser = req.decoded.result.idUser;
        getTransfert(idUser, (err, results) => {
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
    }
}