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
    coach = coach ? coach : false;
    courtAccess = courtAccess ? courtAccess : false;

    let query = 'INSERT INTO users (level_id, email, password, username, address, can_coach, court_access) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING *';
    let values = [skillLevel, email, hashedPw, uname, address, coach, courtAccess];
    dbPoolInstance.query(query, values, (err, result) => {
      if (err){
        callback(err, null);
      }
      else {
        callback(err, result.rows);
      }
    });
  };

  const verifyLogin = (email, pswd, callback) => {
    let query = `SELECT * FROM users WHERE email ='`+email+`'`;
    console.log('query is ', query);
      dbPoolInstance.query(query, (error, result) => {
        if ( (error || result.rows[0] === undefined) ){
          console.log("models error: ", error);
          callback(error, null);
        }
        else {
          console.log('result in models: ', result);
          console.log('pswd: ', pswd);

          let userPswd = result.rows[0].password;
          if (sha256(SALT + pswd) === userPswd) {
            callback(error, result.rows);
          } else {
            callback(error, null);
          }
        }
    });
  }

  const userRecord = (userId, callback) => {
    const query = `SELECT * FROM users WHERE id ='`+userId+`'`;
    dbPoolInstance.query(query, (error, result) => {
      if (error){
        callback(error, null);
      }
      else {
        console.log('user record: ', result.rows[0])
        callback(null, result.rows[0]);
      }
    });
  };



// to check if user exists on registering
  const userExists = (param,callback) => {
      dbPoolInstance.query(query, (error, result) =>{ });
  }

  const getActivityDetails = (activityId, callback)=> {
    let query = `SELECT * FROM activities WHERE id =`+activityId;
    dbPoolInstance.query(query, (error, result) => {
       if( error ){
        callback(error, null);
      }else{
        if( result.rows.length > 0 ){
          callback(null, result.rows);
        }else{
          callback(null, null);
        }
      }
    });
  }


// query to insert activities into table



// query to update activities



// query to delete activities


// query to check activities hosted and joined by user


// query to insert user into join table (user joins activity)


//query to automatically insert user as host in activity organised


// query to check available slots



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
    verifyLogin: verifyLogin,
    userRecord: userRecord,
    userExists: userExists,
    getActivityDetails:getActivityDetails
    // insert: addNewActivity
  };
};
