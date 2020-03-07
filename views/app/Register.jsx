const React = require("react")
const Layout = require("./Layout")


class Register extends React.Component {
  render() {

    const addDisable = (event) => {
      let coachingSwitch = document.getElementById('coaching')
        if (coachingSwitch.disabled === false){
          coachingSwitch.disabled = true
        }
    };

    const removeDisable = (event) => {
      let coachingSwitch = document.getElementById('coaching')
        if (coachingSwitch.disabled){
          coachingSwitch.removeAttribute('disabled');
        }
    };
    return(
        <Layout>
            <div className="container text-center" id="register" >
                <div className="row">
                  <div className="col">
                    <h2>Join our Community</h2>
                        <form method = "POST" action="/" className="needs-validation" noValidate>
                          <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" required/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                          </div>
                          <div className="form-group">
                            <label for="pswd">Password:</label>
                            <input type="password" class="form-control" id="pswd" name="pswd" required/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                          </div>
                          <div className="form-group">
                               <label for="uname">Username:</label>
                               <input type="text" class="form-control" id="uname" name="uname" required/>
                               <div className="valid-feedback">Valid.</div>
                               <div className="invalid-feedback">Please fill out this field.</div>
                          </div>
                          <div className="form-group">
                               <label for="address">Address:</label>
                               <input type="text" class="form-control" id="address" name="address" required/>
                               <div className="valid-feedback">Valid.</div>
                               <div className="invalid-feedback">Please fill out this field.</div>
                          </div>

                          <div className="form-group" required>
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="level" id="beginner" value="1" onClick = {(event)=>{this.addDisable(event)}}/>
                                  <label className="form-check-label" for="beginner">Beginner</label>
                              </div>

                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="level" id="intermediate" value="2" onClick = {(event)=>{this.removeDisable(event)}}/>
                                  <label className="form-check-label" for="intermediate">Intermediate</label>
                              </div>

                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="level" id="competitive" value="3" onClick = {(event)=>{this.removeDisable(event)}} />
                                  <label className="form-check-label" for="competitive">Competitive</label>
                              </div>
                          </div>

                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" disabled id="coaching"/>
                              <label className="custom-control-label" for="coaching">Willing to Teach</label>
                            </div>

                            <div className="custom-control custom-switch">
                              <input type="checkbox" className="custom-control-input" id = "court_access"/>
                              <label className="custom-control-label" for="court_access">Access to court</label>
                            </div>


                          <input type="submit" className="btn btn-primary" value = "Submit"/>
                        </form>

                        <form method = "GET" action = "/" >
                            <input type = "submit" className="btn btn-primary" value = "Cancel"/>
                        </form>
                  </div>
                </div>
            </div>
            <script src = '/script.js'> </script>
        </Layout>
    );
  }
}


module.exports = Register;






