const React = require("react");
const Layout = require("./Layout");
const Nav = require("./Nav");
const moment = require("moment");
moment().format();

class Profile extends React.Component {

  render() {

    return (
        <Layout>
          <Nav/>
            <div className="container">
                <div className = "row">
                  <div className="col">
                    <h2>Player Profile:</h2>
                        <p>Name:</p>
                        <p>Skill:</p>
                        <p>Willing To Teach:</p>

                        <p>Activities Hosted:</p>
                        <p>Activities Joined:</p>

                  </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Profile;
