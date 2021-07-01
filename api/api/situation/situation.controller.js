const {
    createProfil,
    getProfil,
    updateProfil,
    deleteProfil,
    deleteProfilWithId
} = require("./profil.service");
const { sign } = require("jsonwebtoken");

module.exports = {
    createProfil: (req, res) => {
        const body = req.body;

        if (body.libelleProfil != null) {
            createProfil(body, (err, results) => {
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
        } else {
            return res.status(500).json({
                success: 0,
                data: "Aucune donne "
            });
        }

    },
    getProfilByProfilId: (req, res) => {
        const id = req.params.id;
        getProfilByProfilId(id, (err, results) => {
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
    getProfil: (req, res) => {
        getProfil((err, results) => {
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
    updateProfil: (req, res) => {
        const body = req.body;
        updateProfil(body, (err, results) => {
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
    deleteProfil: (req, res) => {
        const data = req.body;
        console.log(req.body);
        deleteProfil(data, (err, results) => {
            if (err) {
                console.log("error", err);
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
    },
    deleteProfilWithId: (req, res) => {
        const data = req.body;
        console.log(req.body);
        deleteProfilWithId(data, (err, results) => {
            if (err) {
                console.log("error", err);
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