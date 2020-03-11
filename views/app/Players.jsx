const React = require("react")
const Layout = require("./Layout")
const Nav = require("./Nav")
const moment = require('moment')
moment().format();

class Players extends React.Component {
  render() {
    let playerArr = this.props.players;
    // let userId = this.props.userId;
    console.log('Players data: ',playerArr);

// create cards for individual players
    let playersCard;
    if (playerArr){
      playersCard = playerArr.map( (player,index) => {
        const playerId = player.id;
        const playerProfile= '/players/'+playerId;
        const username = player.username;
        const address = player.address;
        const skillLevel = player.level_id;
            let skillName = skillLevel === 1 ? "Beginner" : (skillLevel === 2 ? "Intermediate" : "Competitive");
        const canTeach = player.can_coach;
        const canTeachValue = (canTeach === 'f' || canTeach === null) ? "No" : "Yes";

        const courtAccess = player.court_access === true ? "Yes" : "No";

        return (

        <div className="card border-info mb-3">
          <div className="card-body">
              <h3 className="card-title">{username}</h3>
                <p className="card-text">Location: <span> {address} </span> </p>
                <p className="card-text">Skill Level: <span> {skillName} </span> </p>
                <p className="card-text">Court Access: <span> {courtAccess}</span> </p>
                  <a href={playerProfile} className="btn btn-info">View More</a>
          </div>
        </div>
        );
      });
    }

    return (
        <Layout>
          <Nav userId = {this.props.userId}/>
            <div className = "container">
                <div className = "d-flex row card-row justify-content-around p-4 text-center">
                  <div className="card-columns">
                  {playersCard}
                  </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Players;
