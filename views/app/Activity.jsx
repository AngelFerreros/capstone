const React = require("react");
const Layout = require("./Layout");
const Nav = require("./Nav");
const moment = require("moment");
moment().format();

class Activity extends React.Component {

  render() {

    return (
        <Layout>
          <Nav/>
            <div className="container">
                <div className = "row">
                  <div className="col">
                    <h2>Activity Details:</h2>
                      <p>Title:</p>
                      <p>Description:</p>


                        <p>Date:</p>
                        <p>Time:</p>

                        <p>Venue:</p>
                        <p>Attendees:</p><span> (slots left i.e 2/4) </span>

                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Activity;
