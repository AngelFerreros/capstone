const React = require("react");
const Layout = require("./Layout");
const Nav = require("./Nav");
const moment = require("moment");
moment().format();

class Activity extends React.Component {

  render() {
    const activity = this.props.activityDetails;
    const attending = this.props.isAttending;
    const loggedInUser = parseInt(this.props.userId);

    let joinUrl = '/activity/'+activity.id;
    let exitUrl = '/activity/'+activity.id+'/exit?_method=delete';
    let editUrl = '/activity/'+activity.id+'/edit';
    let deleteUrl = '/activity/'+activity.id+'?_method=delete';

    const start = activity.start_at;
    const end = activity.end_at;
    const parseString = "HH:mm:ss ZZ";
        const formattedStart = moment.parseZone(start,parseString).format('h:mm a');
        const formattedEnd = moment.parseZone(end,parseString).format('h:mm a');
    const slots = activity.slots;
      console.log("slots:", slots);
    const title = activity.title.toUpperCase();
    const description = activity.description;
    const venue = activity.address;
    const date = moment(activity.activity_date.toISOString().split("T")[0]).format("MMM DD YYYY");

    const attendeeArr = this.props.attendeeArr;
    let attendees;
    let playersNeeded;
    if (attendeeArr === null || attendeeArr === undefined) {
      attendees ="No attendees yet";
      playersNeeded = slots;
    }else{
    console.log('attendee array: ', attendeeArr)
    const playersAttending = attendeeArr.length
    playersNeeded =  slots - playersAttending + 1//exclude host
    console.log('players needed = ', playersNeeded)

      var host;
      var hostId;
      attendees = attendeeArr.map( (attendee , index) => {
        host = attendee.ishost;
        let hostDisplay;
          if(host){
            hostId = attendee.user_id;
            hostDisplay = "(Host)";
           return <li key = {index} value = {attendee.user_id}><a href = {attendee.user_id}>{attendee.username} {hostDisplay}</a> </li>
          } else {
           return <li key = {index} value = {attendee.user_id}><a href = {attendee.user_id}>{attendee.username}</a></li>
          }
      });
    }
    // conditional rendering of buttons
    console.log('host in btn rendering:', hostId)
    console.log('loggedInUser:', loggedInUser)
    let btn;
    if (hostId === loggedInUser){
    btn =
        <div>
         <form method = "GET" action ={editUrl}>
            <input type = "submit" className = "btn btn-info" id = "edit-btn" value = "Edit" />
          </form>
         <form method = "POST" action = {deleteUrl}>
            <input type = "submit" className = "btn btn-info" id = "delete-btn" value = "Delete" />
         </form>
        </div>
    }else{
      btn =
        <div>
          <form method = "POST" action = {joinUrl}>
            <input type = "submit" id = "btn btn-info" value = "Join" />
          </form>
          <form method = "POST" action = {exitUrl}>
            <input type = "submit" id = "btn btn-info" value = "Exit" />
          </form>
        </div>
    }

    return (
        <Layout>
          <Nav userId = {this.props.userId}/>
            <div className="container">
                <div className = "row main-row">
                  <div className="col">
                    <h2>Activity Details:</h2>
                      <p>Title: {title} </p>
                      <p>Description: {description}</p>
                        <p>Date:{date}</p>
                        <p>Time: {formattedStart} - {formattedEnd}</p>
                        <p>Venue:</p>
                        <p id = "addressToMap">{venue}</p>
                        <div id = "map"> </div>
                        <p>Attendees:</p>
                         <ul>{attendees} </ul>
                        <p>Slots Left: {playersNeeded}</p>
                  <div className = "btn-wrapper"> {btn}</div>
                  </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Activity;
