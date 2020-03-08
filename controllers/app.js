module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  const indexControllerCallback = (request, response) => {
    db.app.getAll((error, allActivities) => {
      data = {
        activities: allActivities
      }
      response.render('app/index', data);
    });
  };

// for get method to render create activity form
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

  const getProfile = (request, response) => {
    db.app.functionToGetUserDetails((error, result) => {
      console.log(result);
      // data = {}
      response.render('app/index', data);
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

      db.app.recordUser(skillLevel, email, pswd, uname, address, coach, courtAccess, (error, result) => {
        console.log("result in controller: ", result);
          if(error){
            data = {
              error: error,
              errorMsg: "Something went wrong. Please try again."
            };
            response.render('app/Register', data)
          } else {
            response.render('app/Login');
          }
      });
  }

const loginUser = (request,response) => {
    let skillLevel = request.body.level;
    let email = request.body.email;
    let pswd = request.body.pswd;
    let uname = request.body.uname;
    let address = request.body.address;
    let coach = request.body.coaching;
    let courtAccess = request.body.court_access;

      db.app.recordUser(skillLevel, email, pswd, uname, address, coach, courtAccess, (error, result) => {
        console.log("result in controller: ", result);
          if(error){
            data = {
              error: error,
              errorMsg: "Something went wrong. Please try again."
            };
            response.render('app/Register', data)
          } else {
            response.render('app/Login');
          }
      });
  }




// let loggedin user be able to organise activity
  const organiseActivity = (request,response) => {
    db.app.insert((error, res ) => {
      data = {

      }
      response.render('app/', data);
    });
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    create: createForm,
    register: registerForm,
    login: loginForm,
    profile: getProfile,
    registerUser: registerUser,
    loginUser: loginUser
  };

}
