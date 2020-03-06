const moment = require("moment")
const sha256 = require("js-sha256")
const SALT = 'Wow, last project!'

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope
  const getAll = (callback) => {
    let query = 'SELECT * FROM activities';
    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);
      }else{
        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
        }else{
          callback(null, null);
        }
      }
    });


// for post method to create activity
  // const addNewActivity = (data, callback) => {
  //   let insertQuery = 'INSERT INTO activities (user_id, category_id, title, description, activity_date, start_at, end_at, address, slots)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)'
  // let values = [];
  //   db.dbPoolInstance.query(insertQuery, values, (error, res)=>{

  //   });
  // }


  };






  return {
    getAll:getAll
    // insert: addNewActivity
  };
};
