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

 const landing = (request, response) => {
      response.render('app/Landing');
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
      response.render('app/Profile', data);
    });
  };

  // const validateIfUserExists = (request,response) => {
  //     db.app.recordUser(skillLevel, email, pswd, uname, address, coach, courtAccess, (error, result) => { });
  // }


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
            response.render('app/Register', data)
          } else {
            response.render('app/Login');
          }
      });
  }

const loginUser = (request,response) => {
  let email = request.body.email;
  let pswd = request.body.pswd;
  console.log("in controller")
    db.app.getUserRecord(email, pswd, (error, result) => {
      if (error){
        console.log("controller error: ", error)
        const data = {
            error: error,
            errorMsg:"There was an error in logging you in. Please check your login details and try again."
          };
          response.render("app/Login", data);
      }
      else{
        console.log('result in controller: ', result)
        response.cookie('logged_in', true);
        response.redirect("/dashboard");
      }
    });
};

  const logout = (request, response) => {
    response.clearCookie("logged_in");
    response.redirect("/");
  };

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
    loginUser: loginUser,
    logout: logout,
    landing: landing
  };

}
