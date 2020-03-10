var React = require("react")
const Layout = require("./Layout")

class Login extends React.Component {
  render() {
    let errorMsg = this.props.error ? this.props.errorMsg : " " ;

    return (
      <Layout>
            <div className="container text-center" >
                <div className="row">
                  <div className="col form">
                    <h2>Log In</h2>
                      <p>{errorMsg}</p>
                        <form method = "POST" action="/login" className="needs-validation" noValidate>
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
