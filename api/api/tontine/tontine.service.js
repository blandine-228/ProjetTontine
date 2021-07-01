const pool = require("../../config/database");

module.exports = {
    createTontine: (data, callBack) => {
        pool.query(
            `insert into tontine(idPeriode,idUser,nomTontine,solde,dateDebut,nbreMaxAdherant,logo,montantCotisation) 
                values(?,?,?,?,?,?,?,?)`, [
                data.idPeriode,
                data.idUser,
                data.nomTontine,
                data.solde,
                data.dateDebut,
                data.nbreMaxAdherant,
                data.logo,
                data.montantCotisation

            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getTontineByTontineId: (id, callBack) => {
        pool.query(
            `select * from tontine where idTontine = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserTontine: (id, callBack) => {
        console.log(id);
        pool.query(
            `select * from tontine where idTontine in (select cmp.idTontine from compte cmp where cmp.idUser=?)`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getTontineByTontineAndUserId: (iduser, callBack) => {
        console.log(iduser);
        pool.query(
            `select tontine.* from tontine INNER JOIN compte ON tontine.idTontine=compte.idCompte where compte.idUser= ?`, [iduser],
            (error, results, fields) => {
                if (error) {

                    callBack(error);
                }

                return callBack(null, results[0]);
            }
        );
    },
    getTontineCreatedBy: (iduser, callBack) => {

        pool.query(
            `select * from tontine where tontine.idUser= ?`, [iduser],
            (error, results, fields) => {
                if (error) {

                    callBack(error);
                }

                return callBack(null, results[0]);
            }
        );
    },
    getTontine: callBack => {
        pool.query(
            `select * from tontine`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getAllTontine: (idUser, callBack) => {
        pool.query(
            `select tn.*,
            (select concat(usr.nomUser,' ',usr.prenomUser)  from user usr where tn.idUser=usr.idUser ) as nomUser,
            (select count(cmp.idCompte)  from compte cmp where tn.idTontine=cmp.idTontine ) as nbrParticipant,
            (select cmp.idCompte  from compte cmp where tn.idTontine=cmp.idTontine and cmp.idUser=?) as estMembre,
            (select count(idTirage)  from tirage tr where tr.idTontine=tn.idTontine) as nbrTirage
             from tontine tn`, [idUser],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateTontine: (data, callBack) => {
        pool.query(
            `update tontine set idTontine=?,idPeriode=?,idUser,nomTontine=?,solde=?,dateDebut=?,nbreMaxAdherant=?,logo =?, nbreMinAdherant =? ,montant_cotisation =?, where idOperation = ?`, [
                data.idPeriode,
                data.idUser,
                data.nomTontine,
                data.solde,
                data.dateDebut,
                data.nbreMaxAdherant,
                data.logo,
                data.nbreMinAdherant,
                data.montant_cotisation

            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    crediterTontine: (montant, idTontine, callBack) => {
        pool.query(
            `update tontine set solde= solde + ? where idTontine = ?`, [
                montant, idTontine
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    activerTontine: (idUser, idTontine, callBack) => {

        pool.query(
            `update tontine set etat=1 where idUser = ? and idTontine= ?`, [
                idUser, idTontine
            ],
            (error, results, fields) => {
                if (error) {

                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteTontine: (data, callBack) => {
        pool.query(
            `delete from tontine where idTontine = ?`, [data.idTontine],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }

};