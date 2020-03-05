
module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.app.getAll((error, allActivities) => {
        console.log('ALL ACTIVITIES: ', allActivities)
        response.render('app/index', { allActivities });
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback
  };

}
