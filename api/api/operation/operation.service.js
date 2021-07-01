const pool = require("../../config/database");

module.exports = {
    createOperation: (data, callBack) => {
        pool.query(
            `insert into operation(idTontine,idCompte,montant,idTirage,typeOperation) 
                values(?,?,?,?,?)`, [
                data.idTontine,
                data.idCompte,
                data.montant,
                data.idTirage,
                data.typeOperation,

            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getOperationByOperationId: (id, callBack) => {
        pool.query(
            `select * from operation where idOperation = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserOperationByTontineId: (idUSer, idTontine, callBack) => {
        console.log(idUSer + " - " + idTontine);
        pool.query(
            `select * from operation where idTontine = ? and idCompte in  (select idCompte from compte cmp where cmp.idUser = ?)`, [idTontine, idUSer],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getAllOperationByTontineId: (id, callBack) => {
        pool.query(
            `select * from operation where idTontine = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getOperation: callBack => {
        pool.query(
            `select * from operation`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getOperationByType: (idUser, ref, callBack) => {
        pool.query(
            `select * ,(select nomTontine from tontine tn where tn.idTontine = op.idTontine) from operation op 
            where op.idCompte in (select cmpt.idCompte  from compte cmpt where cmpt.idUser=?) and typeOperation like ?`, [idUser, ref],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateOperation: (data, callBack) => {
        pool.query(
            `update operation set idOperation=?,idTontine=?,idCompte,dateOperation=?,montant=?,idTirage=?, where idOperation = ?`, [
                data.idTontine,
                data.idCompte,
                data.dateOperation,
                data.montant,
                data.idTirage

            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteOperation: (data, callBack) => {
        pool.query(
            `delete from operation where idOperation = ?`, [data.idOperation],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};