const pool = require("../../config/database");

module.exports = {
    createSituation: (data, callBack) => {
        pool.query(
            `insert into Situation(libelleSituation) 
                values(?)`, [

                data.libelleSituation

            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

};