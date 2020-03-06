module.exports = (app, allModels) => {
  /*
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   */

  // require the controller
  const controllerCallbacks = require('./controllers/app')(allModels);

  app.get('/', controllerCallbacks.index);
  app.get('/organise', controllerCallbacks.create)
};
