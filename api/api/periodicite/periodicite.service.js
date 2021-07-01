const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into periodicite(idPeriode, libellePeriode, nombreJour) 
                values(?,?,?)`, [
                data.idPeriode, data.libellePeriode, data.nombreJour
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getPeriodeById: (id, callBack) => {
        pool.query(
            `select * from periodicite where id = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    getPeriode: callBack => {
        pool.query(
            `select * from periodicite`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatePeriode: (data, callBack) => {
        pool.query(
            `update periodicite set  libellePeriode=?, nombreJour=? where id = ?`, [
                data.libellePeriode, data.nombreJour, data.idPeriode
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deletePeriode: (data, callBack) => {
        pool.query(
            `delete from periodicite where id = ?`, [data.idPeriode],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};