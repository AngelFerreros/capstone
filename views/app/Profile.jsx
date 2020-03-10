const React = require("react");
const Layout = require("./Layout");
const Nav = require("./Nav");
const moment = require("moment");
moment().format();

class Profile extends React.Component {

  render() {
    let name = this.props.details.username;
    let skillLevel = this.props.level_id;
      let skillName = skillLevel === 1 ? "Beginner" : (skillLevel === 2 ? "Intermediate" : "Competitive");
    let canTeach = this.props.can_coach;
      let canTeachValue = (canTeach === 'f' || canTeach === null) ? "No" : "Yes";

    let courtAccess = this.props.court_access === true ? "Yes" : "No";

    return (
        <Layout>
          <Nav/>
            <div className="container">
                <div className = "row">
                  <div className="col">
                    <h2>Player Profile:</h2>
                        <p>Username: {name} </p>
                        <p>Skill: {skillName} </p>
                        <p>Willing To Teach: {canTeachValue} </p>
                        <p>Court Access: {courtAccess} </p>


                        <p>Activities Hosted: {} </p>
                        <p>Activities Joined: {} </p>

                  </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Profile;
