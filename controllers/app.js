const sha256 = require("js-sha256");
module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  const indexPage = (request, response) => {
    let userId = request.cookies.userId;
      db.app.checkSession(userId, (error, loggedIn) => {
        if(loggedIn){
          db.app.getAll((error, allActivities) => {
            data = {
              activities: allActivities
            }
            response.render('app/index', data);
          })
        }
        else{
            response.render('app/Login');
        }
      })
  };

  const landing = (request, response) => {
      response.render('app/Landing');
    };

  const createForm = (request, response) => {
    // if logged in, get user id
      response.render('app/Create');
    };

  const registerForm = (request, response) => {
      response.render('app/Register');
    };

  const loginForm = (request, response) => {
      response.render('app/Login');
    };

// get user data and activities joined/hosted
  const getProfile = (request, response) => {
    db.app.functionToGetUserData((error, result) => {
      console.log(result);
      // data = {}
      response.render('app/Profile', data);
    });
  };


  const registerUser = (request,response) => {
    let skillLevel = request.body.level;
    let email = request.body.email;
    let pswd = request.body.pswd;
    let uname = request.body.uname;
    let address = request.body.address;
    let coach = request.body.coaching;
    let courtAccess = request.body.court_access;
      // !!! VALIDATE IF USER ALR EXISTS !!! //
      db.app.recordUser(skillLevel, email, pswd, uname, address, coach, courtAccess, (error, result) => {
        console.log("result in controller: ", result);
          if(error){
            data = {
              error: error,
              errorMsg: "Something went wrong. Please try again."
            };
            response.render('app/Register', data);
          } else {
            response.render('app/Login');
          }
      });
  }

const loginUser = (request,response) => {
  let email = request.body.email;
  let pswd = request.body.pswd;
  console.log("in controller");
    db.app.getUserRecord(email, pswd, (error, result) => {
      if (error){
        console.log("controller error: ", error);
        const data = {
            error: error,
            errorMsg:"There was an error in logging you in. Please check your login details and try again."
          };
          response.render("app/Login", data);
      }
      else{
        console.log('result in controller: ', result);
        let hashedUname = sha256(result.rows[0].username);
        response.cookie('logged_in', true);
        response.cookie('user', hashedUname);
        response.cookie('userId', result.rows[0].id);
        response.redirect("/dashboard");
      }
    });
};

  const logout = (request, response) => {
    response.clearCookie("logged_in");
    response.clearCookie("user");
    response.clearCookie("userId");

    response.redirect("/");
  };

// let loggedin user be able to organise activity,once created
  const organiseActivity = (request,response) => {
    db.app.insert((error, res ) => {
      data = {

      }
      response.render('app/Profile', data);
    });
  }

  const activityPage = (request, response) => {
// query to get specific activity
  // db.app.getActivityDetails()
    response.render('app/Activity');
  }





  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexPage,
    create: createForm,
    register: registerForm,
    login: loginForm,
    profile: getProfile,
    registerUser: registerUser,
    loginUser: loginUser,
    logout: logout,
    landing: landing,
    organiseActivity: organiseActivity,
    activity: activityPage
  };

}
