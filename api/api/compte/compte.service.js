const pool = require("../../config/database");

module.exports = {
    createCompte: (data, callBack) => {
        console.log(data);
        pool.query(
            `insert into compte (idTontine,idUser,solde,etat,typeApprovisionnement) 
                values(?,?,?,?,?)`, [
                data.idTontine,
                data.idUser,
                data.solde,
                data.etat,
                data.typeApprovisionnement
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getCompteByCompteId: (id, callBack) => {
        pool.query(
            `select * from compte where idCompte = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getCompteIdUSerByTontineId: (id, callBack) => {
        pool.query(
            `select Distinct(idCompte) from compte where idTontine = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getCompteByCompteAndUserId: (idCompte, idUser, callBack) => {
        pool.query(
            `select * from compte where idCompte = ? and idUser`, [idCompte, idUser],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getCompte: callBack => {
        pool.query(
            `select * from compte`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getCompteByUserIdTontineId: (idUser, idTontine, callBack) => {
        pool.query(
            `select * from compte where idUser=? and idTontine=?`, [idUser, idTontine],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getAllUserCompte: (idUser, callBack) => {
        pool.query(
            `select cmp.*,
            (select nomTontine from tontine tn where tn.idTontine = cmp.idTontine) as nomTontine,
            (select nbreMaxAdherant*montantCotisation from tontine tn where tn.idTontine = cmp.idTontine) as montantGain,
            (select dateTirage from tirage tr where tr.idTontine = cmp.idTontine and tr.idCompte=cmp.idCompte) as dateTirage
             from compte cmp where idUser=?`, [idUser],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateCompte: (data, callBack) => {
        pool.query(

            `update compte set idCompte=?,idTontine=?, idUser=?,solde=?,etat=?,typeApprovisionnement where idCompte = ?`, [
                data.idCompte,
                data.idTontine,
                data.idUser,
                data.solde,
                data.etat,
                data.typeApprovisionnement


            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteCompte: (data, callBack) => {
        pool.query(
            `delete from compte where idCompte = ?`, [data.idCompte],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};