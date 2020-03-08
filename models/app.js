const moment = require("moment");
const sha256 = require("js-sha256");
const SALT = 'Wow, last project!';

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
  };

  const recordUser = (skillLevel, email, pswd, uname, address, coach, courtAccess, callback) => {
    let hashedPw = sha256(SALT + pswd);
    let query;
      if(coach === null || courtAccess === null ){
        query = 'INSERT INTO users (level_id, email, password, username, address, can_coach, court_access) VALUES ($1, $2, $3, $4, $5) RETURNING *';
      }else {
        query = 'INSERT INTO users (level_id, email, password, username, address, can_coach, court_access) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING *';
      }
    let values = [skillLevel, email, hashedPw, uname, address, coach, courtAccess];
     // query = 'INSERT INTO users (level_id, email, password, username, address, can_coach, court_access) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING *';
    dbPoolInstance.query(query, values, (err, result) => {
      if (err){
        callback(err, null);
      }
      else {
        callback(err, result.rows);
      }
    });
  };

  const getUserRecord = (email, pswd, callback) => {
    let query = `SELECT * FROM users WHERE email ='`+email+`'`;
    console.log('query is ', query);
      dbPoolInstance.query(query, (error, result) => {
        if ( (error || result.rows[0] === undefined) ){
          console.log("models error: ", error);
          callback(error, null);
        }
        else {
          console.log('result in models: ', result);
          let userPswd = result.rows[0].password;
          if (sha256(SALT + pswd) === userPswd) {
            callback(error, result.rows);
          } else {
            callback(error, null);
          }
        }
    });
  }

  const checkSession = (userId, callback) => {
    let loggedIn;
    const query = `SELECT * FROM users WHERE id ='`+userId+`'`;
    dbPoolInstance.query(query, (error, result) => {
      if (error){
        callback(error, null);
      }
      else {
        if( sha256(result.rows[0].username) === request.cookies["user"] ){
        loggedIn = true;
        } else {
        loggedIn = false;
        }
      callback(error, loggedIn);
      }
    });
  };

  const userExists = (request,response) => {
      db.app.recordUser(skillLevel, email, pswd, uname, address, coach, courtAccess, (error, result) => { });
  }



// for post method to create activity
  // const addNewActivity = (data, callback) => {
  //   let insertQuery = 'INSERT INTO activities (user_id, category_id, title, description, activity_date, start_at, end_at, address, slots)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)'
  // let values = [];
  //   db.dbPoolInstance.query(insertQuery, values, (error, res)=>{


  //   });
  // }







  return {
    getAll:getAll,
    recordUser:recordUser,
    getUserRecord: getUserRecord,
    checkSession: checkSession,
    userExists: userExists
    // insert: addNewActivity
  };
};
