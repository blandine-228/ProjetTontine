const {
    createTirage,
    getTirageById,
    getTirage,
    updateTirage,
    deleteTirage,
    createTirages,
    getTirageDetailByIdTontine
} = require("./tirage.service");
const { sign } = require("jsonwebtoken");

module.exports = {
    createTirage: (req, res) => {
        const body = req.body;
        createTirage(body, (err, results) => {
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
    createTirages: (req, res) => {
        const body = req.body;
        createTirages(body, (err, results) => {
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

    getTirageById: (req, res) => {
        const id = req.params.id;
        getTirageById(id, (err, results) => {
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
    getTirage: (req, res) => {
        getTirage((err, results) => {
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
    getTirageDetailByIdTontine: (req, res) => {
        const id = req.params.id;
        getTirageDetailByIdTontine(id, (err, results) => {
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
    updateTirage: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateTirage(body, (err, results) => {
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
    deleteTirage: (req, res) => {
        const data = req.body;
        deleteTirage(data, (err, results) => {
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