const React = require("react");
const Layout = require("./Layout");
const Nav = require("./Nav");
const moment = require("moment");

class Profile extends React.Component {

  render() {
    const name = this.props.details.username;
    const address = this.props.details.address;
    const skillLevel = this.props.details.level_id;
      const skillName = skillLevel === 1 ? "Beginner" : (skillLevel === 2 ? "Intermediate" : "Competitive");
    const canTeach = this.props.details.can_coach;
      const canTeachValue = (canTeach === 'f' || canTeach === null) ? "No" : "Yes";

    const courtAccess = this.props.details.court_access === true ? "Yes" : "No";

    const userActivities = this.props.activities;
    console.log('activities by user:' , userActivities)
    //condition to display chat button  <a href = "https://api.whatsapp.com/send?phone=+65()"> Chat </a>

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
