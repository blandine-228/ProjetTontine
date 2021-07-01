const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into user(idProfil, nomUser, prenomUser, password, numTel, email,username,imageProfil) 
                values(?,?,?,?,?,?,?,?)`, [
                data.idProfil,
                data.nomUser,
                data.prenomUser,
                data.password,
                data.numTel,
                data.email,
                data.username,
                data.imageProfil
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
            `select * from user where email = ?`, [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUsername: (username, callBack) => {
        pool.query(
            `select * from user where username = ?`, [username],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
            `select idProfil, nomUser, prenomUser, password, numTel, email,username,imageProfil from user where idUser = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select idUSer,idProfil, nomUser, prenomUser, password, numTel, email,username,imageProfil from user`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update user set idProfil=?, nomUser=?, prenomUser=?, password=?, numTel=?, email=?,username=?,imageProfil=? where idUser = ?`, [
                data.idProfil,
                data.nomUser,
                data.prenomUser,
                data.password,
                data.numTel,
                data.email,
                data.username,
                data.imageProfil,
                data.idUSer
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUserAccount: (idUser, montant, callBack) => {
        pool.query(
            `update user set solde = solde - ? where idUser = ? and solde > ?`, [
                montant, idUser, montant
            ],
            (error, results, fields) => {
                if (error) {

                    callBack(error);
                }

                return callBack(null, results);
            }
        );
    },
    updateUserAccountFromTontine: (idUser, montant, callBack) => {
        pool.query(
            `update user set solde = solde + ? where idUser = ?`, [
                montant, idUser, montant
            ],
            (error, results, fields) => {
                if (error) {

                    callBack(error);
                }

                return callBack(null, results);
            }
        );
    },

    rechargeUserAccount: (idUser, montant, callBack) => {
        pool.query(
            `update user set solde = solde + ? where idUser = ?`, [
                montant, idUser, montant
            ],
            (error, results, fields) => {
                if (error) {

                    callBack(error);
                }

                return callBack(null, results);
            }
        );
    },
    debiterUserAccount: (idUser, montant, callBack) => {
        pool.query(
            `update user set solde = solde - ? where idUser = ? and solde >= ? `, [
                montant, idUser, montant
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from user where idUser = ?`, [data.idUSer],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    userSolde: (idUser, callBack) => {
        pool.query(
            `select solde from user where idUser = ?`, [idUser],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }


};