var React = require("react")
const Layout = require("./Layout")

class Login extends React.Component {
  render() {

    return (
      <Layout>
            <div className="container text-center" id="register" >
                <div className="row">
                  <div className="col">
                    <h2>Log In</h2>
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

                          <input type="submit" className="btn btn-primary" value = "Submit"/>
                        </form>

                        <form method = "GET" action = "/" >
                            <input type = "submit" className="btn btn-primary" value = "Cancel"/>
                        </form>
                  </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Login;
