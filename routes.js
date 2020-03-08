  /*
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   */
module.exports = (app, allModels) => {
  // require the controller
  const controllerCallbacks = require('./controllers/app')(allModels);

  app.get('/', controllerCallbacks.landing)
  app.get('/dashboard', controllerCallbacks.index);
  app.get('/organise', controllerCallbacks.create)
  app.get('/register', controllerCallbacks.register)
  app.get('/login', controllerCallbacks.login)
  app.get('/profile', controllerCallbacks.profile)

  app.post('/logout', controllerCallbacks.logout)
  app.post('/register', controllerCallbacks.registerUser)
  app.post('/login' , controllerCallbacks.loginUser)



};
