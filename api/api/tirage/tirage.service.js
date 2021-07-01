const pool = require("../../config/database");

module.exports = {
    createTirage: (data, callBack) => {
        pool.query(
            `insert into tirage (idTontine,idCompte,numOrdre,dateTirage) 
                values(?,?,?,?)`, [
                data.idTontine,
                data.idCompte,
                data.numOrdre,
                data.dateTirage

            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    createTirages: (data, callBack) => {
        pool.query(
            `insert into tirage (idTontine,idCompte,numOrdre,dateTirage) 
                values ?`, [data.tirages],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getTirageById: (id, callBack) => {
        pool.query(
            `select * from tirage where idTirage = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getTirage: callBack => {
        pool.query(
            `select * from tirage`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getTirageDetailByIdTontine: (idTontine, callBack) => {
        console.log(idTontine);
        pool.query(
            `select tr.*,
            (select concat(usr.nomUser,' ',usr.prenomUser)  from user usr where 
                usr.idUser=(select cmp.idUser from compte cmp where cmp.idTontine=tr.idTontine and cmp.idCompte=tr.idCompte) ) as nomUser
             from tirage tr where tr.idTontine=?`, [idTontine],

            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }

                return callBack(null, results);
            }
        );
    },
    updateTirage: (data, callBack) => {
        pool.query(

            `update tirage set idTontine=?, idCompte=?,numOrdre=?,dateTirage=?, where idTirage = ?`, [

                data.idTontine,
                data.idCompte,
                data.numOrdre,
                data.dateTirage



            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteTirage: (data, callBack) => {
        pool.query(
            `delete from tirage where idTirage = ?`, [data.idTirage],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};