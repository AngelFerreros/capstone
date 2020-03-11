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
  const getAll = (queryString, callback) => {
    let query;
    if(queryString === null){
      query = 'SELECT * FROM activities';
      dbPoolInstance.query(query, (error, queryResult) => {
        if( error ){
          callback(error, null);
        }
        else{
          if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
          }else{
            callback(null, null);
          }
        }
      });
    } else if (queryString === "ASC") {
      query = 'SELECT * FROM activities ORDER BY activity_date ASC';
      dbPoolInstance.query(query, (ascError, ascResult) => {
        if( ascError ){
          callback(ascError, null);
        }
        else{
          if( ascResult.rows.length > 0 ){
            callback(null, ascResult.rows);
          }else{
            callback(null, null);
          }
        }
      });
    } else{
      query = 'SELECT * FROM activities ORDER BY activity_date DESC';
      dbPoolInstance.query(query, (descError, descResult) => {
        if( descError ){
          callback(descError, null);
        }
        else{
          if( descResult.rows.length > 0 ){
            callback(null, descResult.rows);
          }else{
            callback(null, null);
          }
        }
      });
    }
  };


  const recordUser = (skillLevel, email, pswd, uname, address, coach, courtAccess, callback) => {
    let hashedPw = sha256(SALT + pswd);
    coach = coach ? coach : false;
    courtAccess = courtAccess ? courtAccess : false;

    let query = 'INSERT INTO users (level_id, email, password, username, address, can_coach, court_access) VALUES ($1, $2, $3, $4, $5, $6,$7) RETURNING *';
    let values = [skillLevel, email, hashedPw, uname, address, coach, courtAccess];
    dbPoolInstance.query(query, values, (error, result) => {
      if (error){
        callback(error, null);
      }
      else {
        callback(null, result.rows);
      }
    });
  };

  const verifyLogin = (email, pswd, callback) => {
    let query = `SELECT * FROM users WHERE email ='`+email+`'`;
    console.log('query is ', query);
      dbPoolInstance.query(query, (error, result) => {
        if ( (error) || (result.rows[0] === undefined) ){
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

  const getUserRecord = (userId, callback) => {
    const query = `SELECT * FROM users WHERE id =`+userId;
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

// query to check attendees(incl.host) of an activity
  const getAttendees = (activityId, callback) => {
    let query = 'SELECT activities_users.user_id, activities_users.isHost, users.username from activities_users INNER JOIN users ON (activities_users.user_id = users.id) WHERE activities_users.activity_id='+activityId;
    dbPoolInstance.query(query, (error, result) => {
       if( error ){
        callback(error, null);
      }else{
        if( result.rows.length > 0 ){
          console.log('result in models: ', result)
          callback(null, result.rows);
        }else{
          callback(null, null);
        }
      }
    });
 }


// query to insert activities into table
  const insertActivity = (userId, category, title, description, date, start_at, end_at, address, slots, callback) => {
    let values = [userId, category, title, description, date, start_at, end_at, address, slots];
    console.log('Values to insert: ', values)
    let insertQuery = 'INSERT INTO activities (user_id, category_id, title, description, activity_date, start_at, end_at, address, slots)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *';
    dbPoolInstance.query(insertQuery, values, (error, result) => {
      if (error){
        callback(error, null);
      } else {
        callback(null, result.rows[0]);
      }
    })
  }

// query to insert user into join table (user joins/hosts activity)
  const joinActivity = (userId, isHost, activityId, callback) => {
    let values = [userId, isHost, activityId];
    let insertQuery = 'INSERT INTO activities_users (user_id, isHost,activity_id) VALUES ($1,$2,$3) RETURNING *';
    dbPoolInstance.query(insertQuery, values, (error, result) => {
      if (error){
        callback(error, null);
      } else {
        callback(null, result.rows[0]);
      }
    })
 }

  const exitActivity = (userId,activityId,callback)=> {
    let query = `DELETE FROM activities_users WHERE user_id =`+userId+`AND activity_id =`+activityId;
    dbPoolInstance.query(query, (error,result) => {
       if (error){
        callback(error, null);
      } else {
        callback(null, result.rows[0]);
      }
    });
  }



// query to update activity
  const updateActivity = (userId, category, title, description, date, start_at, end_at, address, slots, callback) => {
    let values = [category, title, description, date, start_at, end_at, address, slots];
    let query = 'UPDATE activities SET (category_id, title, description, activity_date, start_at, end_at, address, slots) = ($1,$2,$3,$4,$5,$6,$7,$8) WHERE user_id='+userId+' RETURNING *';
    console.log('update query:', query)

    dbPoolInstance.query(query, values,(error,result) => {
      if(error){
        callback(error,null)
      }else{
        console.log('update result in model:', result)
        callback(null, result.rows[0]);
      }
    });
  }

// query for owner to delete activity - need to remove at activities_users
  const deleteActivity = (activityId, callback) => {
    let query = 'DELETE FROM activities WHERE id ='+activityId;
    dbPoolInstance.query(query, (error,result) => {
      if(error){
        callback(error,null)
      }else{
        console.log('deleted:', result)
        callback(null, result.rows[0]);
      }
    });
  }

  const getPlayers = (userId, callback) => {
    let query = `SELECT * FROM users WHERE NOT id =`+userId;
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

  const sortDate = ( callback) => {
    let query;
    if (asc) {
      query = "SELECT * FROM activities ORDER BY activity_date asc";
    } else {
      query = "SELECT * FROM activities ORDER BY activity_date desc";
    }
    dbPoolInstance.query(query, (error, result) => {
      if (error) console.log(error);
      else callback(error, result.rows);
    });
  };


// query to count activities hosted and joined
  const userActivities = (userId,callback)=>{
    let query = 'SELECT activities.title, activities_users.isHost FROM activities INNER JOIN activities_users ON (activities.id = activities_users.activity_id)WHERE activities_users.user_id='+userId;
    dbPoolInstance.query(query, (error, result) => {
      if(error || result.rows.length < 0){
        callback(error, null);
      }else if (result.rows.length > 0){
        callback(null, result.rows);
      }else{
        callback(null, null);
      }
    });
  }



  return {
    getAll:getAll,
    recordUser:recordUser,
    verifyLogin: verifyLogin,
    getUserRecord: getUserRecord,
    userExists: userExists,
    getActivityDetails:getActivityDetails,
    insertActivity: insertActivity,
    joinActivity: joinActivity,
    getAttendees: getAttendees,
    updateActivity: updateActivity,
    deleteActivity:deleteActivity,
    exitActivity:exitActivity,
    getPlayers: getPlayers,
    userActivities:userActivities
  };
}
