const React = require("react");
const Layout = require("./Layout");
const Nav = require("./Nav");
const moment = require("moment");

class Create extends React.Component {

  render() {

    return (
        <Layout>
          <Nav/>
            <div className="container">
                <div className = "row main-row">
                  <div className="form col-auto">
                    <h2>Organise an Activity:</h2>
                        <form method = "POST" action="/organise" className="needs-validation create-form" noValidate >
                          <div className="form-group">
                            <label for="title">Title:</label>
                            <input type="text" className="form-control" id="title" placeholder="Activity Title" name="title" required/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                          </div>
                          <div className="form-group">
                            <label for="description">Description:</label>
                            <textarea type="description" class="form-control" id="description" placeholder="Write some details" name="description" required></textarea>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                          </div>
                          <div className="form-group" required>
                              <div className="form-check">
                                <input className="category form-check-input" type="radio" name="category" id="rally" value="1" />
                                  <label className="form-check-label" for="rally">
                                    Rally
                                  </label>
                              </div>
                              <div className="form-check">
                                <input className="category form-check-input" type="radio" name="category" id="singles" value="2"/>
                                  <label className="form-check-label" for="singles">
                                    Singles
                                  </label>
                              </div>
                              <div className="form-check">
                                <input className="category form-check-input" type="radio" name="category" id="doubles" value="3"/>
                                  <label className="form-check-label" for="doubles">
                                    Doubles
                                  </label>
                              </div>
                              <div className="form-check">
                                <input className="category form-check-input" type="radio" name="category" id="training" value="4"/>
                                  <label className="form-check-label" for="training">
                                    Training
                                  </label>
                              </div>
                            </div>

                          <div className="form-group">
                            <label for="players">Players Needed:</label>
                            <select className="form-control" id="players" name = "players">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                            </select>
                          </div>
                           <div className="form-group">
                               <label for="date">Date:</label>
                               <input type="date" className="form-control" id="date" name="date" required/>
                               <div className="valid-feedback">Valid.</div>
                               <div className="invalid-feedback">Please fill out this field.</div>
                          </div>
                          <div className="form-group">
                               <label for="start">Start Time:</label>
                               <input type="time" className="form-control" id="start" name="start" required/>
                               <div className="valid-feedback">Valid.</div>
                               <div className="invalid-feedback">Please fill out this field.</div>
                          </div>
                           <div className="form-group">
                               <label for="end">End Time:</label>
                               <input type="time" className="form-control" id="end" name="end" required/>
                               <div className="valid-feedback">Valid.</div>
                               <div className="invalid-feedback">Please fill out this field.</div>
                          </div>

                          <div className="form-group">
                               <label for="address">Venue:</label>
                               <input type="text" className="form-control" id="address" name="address" required/>
                               <div className="valid-feedback">Valid.</div>
                               <div className="invalid-feedback">Please fill out this field.</div>
                          </div>

                          <input type="submit" className="btn btn-primary" value = "Submit"/>
                        </form>
                        <form method = "GET" action = "/dashboard" >
                            <input type = "submit" className="btn btn-primary" value = "Cancel"/>
                        </form>
                    </div>
                </div>
            </div>
            <script src = 'maps.js'> </script>
        </Layout>
    );
  }
}

module.exports = Create;
