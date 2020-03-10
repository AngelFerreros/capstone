  /*
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   */
module.exports = (app, allModels) => {
  // require the controller
  const controllerCallbacks = require('./controllers/app')(allModels);

  app.get('/', controllerCallbacks.landing)
  app.get('/dashboard', controllerCallbacks.index)
  app.get('/organise', controllerCallbacks.create)
  app.get('/register', controllerCallbacks.register)
  app.get('/login', controllerCallbacks.login)
  app.get('/players/:userId', controllerCallbacks.profile)
  app.get('/activity/:id', controllerCallbacks.activity)
  app.get('/activity/:id/edit', controllerCallbacks.edit)

  app.get('/players', controllerCallbacks.players)


  app.post('/logout', controllerCallbacks.logout)
  app.post('/register', controllerCallbacks.registerUser)
  app.post('/login' , controllerCallbacks.loginUser)
  app.post('/organise' , controllerCallbacks.organiseActivity)
  app.post('/activity/:id', controllerCallbacks.join)

  app.put('/activity/:id',controllerCallbacks.updateActivity)
  app.delete('/activity/:id', controllerCallbacks.deleteActivity)


};
