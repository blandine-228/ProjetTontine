const pool = require("../../config/database");

module.exports = {
    createProfil: (data, callBack) => {
        pool.query(
            `insert into profil(libelleProfil) 
                values(?)`, [

                data.libelleProfil

            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getProfilByProfilID: (id, callBack) => {
        pool.query(
            `select * from profil where idProfil = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getProfil: callBack => {
        pool.query(
            `select * from profil`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateProfil: (data, callBack) => {
        pool.query(
            `update profil set libelleProfil=? where idProfil = ?`, [

                data.libelleProfil, data.idProfil

            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteProfil: (data, callBack) => {
        console.log(data);
        pool.query(
            `delete from profil where idProfil = ?`, [data.idProfil],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                console.log(results[0]);
                return callBack(null, results[0]);
            }
        );
    },
    deleteProfilWithId: (id, callBack) => {
        console.log(id);
        pool.query(
            `delete from profil where idProfil = ?`, id,
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                console.log(results[0]);
                return callBack(null, results[0]);
            }
        );
    }

};