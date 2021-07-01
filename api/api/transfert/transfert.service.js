const pool = require("../../config/database");

module.exports = {
    createTransfert: (data, callBack) => {
        pool.query(
            `insert into transfert(idUser,solde,telephone,typeOperation,moyenOperation,codeTransaction) 
                values(?,?,?,?,?,?)`, [
                data.idUser,
                data.solde,
                data.telephone,
                data.typeOperation,
                data.moyenOperation,
                data.codeTransaction

            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }

                return callBack(null, results);
            }
        );
    },
    getTransfert: (data, callBack) => {
        pool.query(
            `select * from transfert where idUSer=?`, [idUser],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }

                return callBack(null, results);
            }
        );
    },
};