const sha256 = require("js-sha256");
module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

// checkSession :: request.cookies -> boolean

// verify if user is alr loggedIn in all GET requests
  // const checkSession = (request, response )=> {
  //   let loggedIn;
  //     db.app.getUserRecord(userId, (error, result) => {
  //       let uname = result.username;
  //       let hashedCookie = sha256(uname);
  //     })
  //       if( request.cookies.user === hashedCookie){
  //         console.log('User is logged in!')
  //         loggedIn = true
  //       }
  //       else{
  //         loggedIn= false
  //         response.render('app/Login');
  //       }
  // }

/*
error codes
res.sendStatus(200) // equivalent to res.status(200).send('OK')
res.sendStatus(403) // equivalent to res.status(403).send('Forbidden')
res.sendStatus(404) // equivalent to res.status(404).send('Not Found')
res.sendStatus(500) // equivalent to res.status(500).send('Internal Server Error')
*/

//////////// ADD AUTHENTICATION FOR ALL GET REQUESTS ////////////
  const indexPage = (request, response) => {
    console.log('UserId cookie: ', request.cookies.userId)
    let userId = request.cookies.userId;

          db.app.getAll((error, allActivities) => {
            data = {
              userId:request.cookies.userId,
              activities: allActivities
            }
            response.render('app/index', data);

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
    let userId = request.params.userId;
    db.app.getUserRecord(userId, (error, result) => {
      console.log('user record: ', result);
      if (error || result === null){
        response.sendStatus(404)
      }else {
        db.app.userActivities(userId, (actErr, actResult) =>{
          console.log('results: ', actResult)
          data = {
            userId: request.cookies.userId,
            details: result,
            activities: actResult
          }
        response.render('app/Profile', data);
        })
      }
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
     ////////////VALIDATE IF USER ALR EXISTS////////////
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
    db.app.verifyLogin(email, pswd, (error, result) => {
      if (error || result === null){
        console.log("controller error: ", error);
        const data = {
            error: error,
            errorMsg:"There was an error in logging you in. Please check your login details and try again."
          };
          response.render("app/Login", data);
      }
      else{
        console.log('result in controller: ', result);
        let hashedUname = sha256(result[0].username);
        response.cookie('logged_in', true);
        response.cookie('user', hashedUname);
        response.cookie('userId', result[0].id);
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

// let loggedin user be able to organise activity
  const organiseActivity = async (request,response) => {
    let userId = request.cookies.userId;
    let title = request.body.title;
    let description = request.body.description;
    let category = request.body.category;
    let slots = request.body.players;
    let date = request.body.date;
    let start_at = request.body.start;
    let end_at = request.body.end;
    let address = request.body.address;

    db.app.insertActivity( userId, category, title, description, date, start_at, end_at, address, slots,(error, result ) => {
      if (error){
        console.log(error);
      } else {
        console.log('activity created: ', result)
        let isHost = true;
        let activityId = result.id
        db.app.joinActivity(userId, isHost, activityId, (joinErr, joinRes) => {
          if (joinErr){
        console.log(joinErr);
        response.render('/organise');
        } else {
            console.log(joinRes);
            response.redirect('/dashboard');
        }
        });
      }
    })
  }

// query to get specific activity
  const activityPage = (request, response) => {
    let userId = parseInt(request.cookies.userId);
    let activityId = request.params.id;
    console.log('activity id chosen: ', activityId)
      db.app.getActivityDetails(activityId, (error, result) => {
        if (error){
          console.log(error)
        } else {
          db.app.getAttendees(activityId, (attendeeErr, attendeeRes) => {
             console.log('attendee result in controller:' , attendeeRes)
            let isAttending = false;
            for (let i = 0;  i < attendeeRes.length; i++) {
              let attendeeId = attendeeRes[i].user_id;
                  console.log('user iddd:',userId)
                if (attendeeId === userId){
                  isAttending = true;
                  break;
                }
            }
          console.log('user attending?: ', isAttending)
            data = {
              userId:userId,
              activityDetails: result[0],
              attendeeArr: attendeeRes,
              isAttending:isAttending
            }
          response.render('app/Activity', data);
          });
        }
      })
  };

  const editActivity = (request, response) => {
    //only host can edit own activity
    let userId = request.cookies.userId;
    let activityId = request.params.id;
      db.app.getActivityDetails(activityId, (error, result) => {
        let activityHost = result[0].user_id;
        if (error){
          console.log('cannot edit due to: ', error);
        } else if(userId != activityHost){
          response.redirect('/activity/'+activityId)
        } else {
        db.app.getAttendees(activityId, (attendeeErr, attendeeRes) => {
            data = {
              userId:userId,
              activityDetails: result[0],
              attendeeArr: attendeeRes
            }
          response.render('app/Edit', data)
        });
        }
      });
  }

  const updateActivity = (request, response) => {
    let userId = request.cookies.userId;
    let activityId = request.params.id;
    let title = request.body.title;
    let description = request.body.description;
    let category = request.body.category;
    let slots = request.body.players;
    let date = request.body.date;
    let start_at = request.body.start;
    let end_at = request.body.end;
    let address = request.body.address;

      db.app.updateActivity(userId, category, title, description, date, start_at, end_at, address, slots, (error,result) => {
        if(error){
            response.redirect('app/Edit');
          } else {
            console.log('updated result in controller: ', result)
            response.redirect('/activity/'+activityId);
          }
      })
  }

// only host can delete activity
  const deleteActivity = (request, response) => {
    let activityId = request.params.id;
    db.app.deleteActivity(activityId, (error,result) => {
      if (error){
        console.log('error: ', error)
        response.sendStatus(500)
        // response.render('app/Activity')
      } else {
        response.redirect('app/index');
      }
    });

  }


  const joinActivity = (request, response) => {
    let userId = request.cookies.userId;
    let activityId = request.params.id;
    let isHost = false;
    db.app.joinActivity(userId, isHost, activityId, (error,result) => {
      if (error){
        console.log('error: ', error)
        response.redirect('/activity/'+activityId)
      } else {
        response.redirect('/activity/'+activityId);
      }
    });
  }

  const exitActivity = (request, response) => {
    let userId = request.cookies.userId;
    let activityId = request.params.id;
    db.app.exitActivity(userId, activityId, (error,result) => {
      if (error){
        console.log('error: ', error)
        response.sendStatus(500)
        // response.render('app/Activity')
      } else {
        response.redirect('/activity/'+activityId);
      }
    });
  }

  const playersIndex = (request,response) => {
    let userId = request.cookies.userId;
    db.app.getPlayers(userId, (error, result)=> {
      if (error){
        response.sendStatus(500)
      }else {
        data = {
          userId:request.cookies.userId,
          players: result
        }
      response.render('app/Players', data);
      }
    });

  }

  const sortDate = (request,response) => {
    let ascending = request.body.userId;
    db.app.sortDate

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
    activity: activityPage,
    players: playersIndex,
    editActivity:editActivity,
    updateActivity: updateActivity,
    deleteActivity:deleteActivity,
    join: joinActivity,
    exitActivity: exitActivity,
    sort: sortDate

  };

}
