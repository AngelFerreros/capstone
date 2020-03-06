const React = require("react");
const Layout = require("./Layout");
const Nav = require("./Nav");
const moment = require("moment");
moment().format();

class Create extends React.Component {

  render() {

    return (
        <Layout>
          <Nav/>
            <div className="container">
                <div className="col">
                    <div className = "row">
                        <form action="/" className="needs-validation" noValidate>
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
                          <div class="form-group">
                            <label for="min">Min Players:</label>
                            <select class="form-control" id="min">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label for="max">Max Players:</label>
                            <select class="form-control" id="max">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                           <div className="form-group">
                               <label for="date">Date:</label>
                               <input type="date" class="form-control" id="date" name="date" required/>
                               <div className="valid-feedback">Valid.</div>
                               <div className="invalid-feedback">Please fill out this field.</div>
                          </div>
                          <div className="form-group">
                               <label for="time">Time:</label>
                               <input type="time" class="form-control" id="description" name="time" required/>
                               <div className="valid-feedback">Valid.</div>
                               <div className="invalid-feedback">Please fill out this field.</div>
                          </div>

                          <input type="submit" className="btn btn-primary" value = "Submit"/>
                        </form>

                    <div className = "row">
                        <form method = "GET" action = "/" >
                            <input type = "submit" className="btn btn-primary" value = "Cancel"/>
                        </form>
                    </div>

                    </div>
                </div>
            </div>
            <script src = '/script.js'> </script>
        </Layout>

    );
  }
}

module.exports = Create;
