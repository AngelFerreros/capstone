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
    register: registerForm
  };

}
