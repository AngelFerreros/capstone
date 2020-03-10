const React = require("react");
const Layout = require("./Layout");
const Nav = require("./Nav");
const moment = require("moment");
moment().format();

class Profile extends React.Component {

  render() {
    let name = this.props.details.username;
    let address = this.props.details.address;
    let skillLevel = this.props.level_id;
      let skillName = skillLevel === 1 ? "Beginner" : (skillLevel === 2 ? "Intermediate" : "Competitive");
    let canTeach = this.props.can_coach;
      let canTeachValue = (canTeach === 'f' || canTeach === null) ? "No" : "Yes";

    let courtAccess = this.props.court_access === true ? "Yes" : "No";

    return (
        <Layout>
          <Nav userId = {this.props.userId}/>
            <div className="container">
                <div className = "row main-row">
                  <div className="col-4">
                    <h2>Player Profile:</h2>
                        <p>Username: {name} </p>
                        <p>Location:{address} </p>
                        <p>Skill: {skillName} </p>
                        <p>Willing To Teach: {canTeachValue} </p>
                        <p>Court Access: {courtAccess} </p>
                        <p>Activities Hosted: {} </p>
                        <p>Activities Joined: {} </p>
                  </div>
                  <div className="col-8"> <img className ="img-fluid" id = "player-practice" src = "/images/player_prep.jpg" alt="player-practice"/></div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Profile;
