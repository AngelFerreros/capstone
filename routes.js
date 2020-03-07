  /*
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   */
module.exports = (app, allModels) => {
  // require the controller
  const controllerCallbacks = require('./controllers/app')(allModels);

  app.get('/', controllerCallbacks.index);
  app.get('/organise', controllerCallbacks.create)
  app.get('/register', controllerCallbacks.register)


};
