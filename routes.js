  /*
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   */
module.exports = (app, allModels) => {
  // require the controller
  const controllerCallbacks = require('./controllers/app')(allModels);

  // app.get('/', controllerCallbacks.home)
  app.get('/', controllerCallbacks.index);
  app.get('/organise', controllerCallbacks.create)
  app.get('/register', controllerCallbacks.register)
  app.get('/login', controllerCallbacks.login)
  app.get('/profile', controllerCallbacks.profile)

  app.post('/register', controllerCallbacks.registerUser)
  app.post('/login' , controllerCallbacks.loginUser)



};
