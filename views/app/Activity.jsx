const React = require("react");
const Layout = require("./Layout");
const Nav = require("./Nav");
const moment = require("moment");
moment().format();

class Activity extends React.Component {

  render() {
    const activity = this.props.activityDetails;
    const attending = this.props.isAttending;

    let joinUrl = '/activity/'+activity.id;
    let exitUrl = '/activity/'+activity.id+'/exit?_method=delete';
    let editUrl = '/activity/'+activity.id+'/edit';
    let deleteUrl = '/activity/'+activity.id+'?_method=delete';

    const attendeeArr = this.props.attendeeArr;
    console.log('attendee array: ', attendeeArr)
      const title = activity.title.toUpperCase();
      const description = activity.description;
      const venue = activity.address;
      const date = moment(activity.activity_date.toISOString().split("T")[0]).format("MMM DD YYYY");

    const start = activity.start_at;
    const end = activity.end_at;
    const parseString = "HH:mm:ss ZZ";
        const formattedStart = moment.parseZone(start,parseString).format('h:mm a');
        const formattedEnd = moment.parseZone(end,parseString).format('h:mm a');
    const slots = activity.slots;
      console.log("slots:", slots);
    const playersAttending = attendeeArr.length
    const playersNeeded =  slots - playersAttending + 1//exclude host
    console.log('players needed = ', playersNeeded)

    var host;
    const attendees = attendeeArr.map( (attendee , index) => {
      host = attendee.ishost;
      let hostDisplay;
        if(host){
           hostDisplay = "(Host)";
         return <li key = {index} value = {attendee.user_id}>{attendee.username} {hostDisplay} </li>
        } else {
         return <li key = {index} value = {attendee.user_id}>{attendee.username}</li>
        }
    });

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
                        <a href ="#"> <ul>{attendees} </ul> </a>
                        <p>Slots Left: {playersNeeded}</p>

                        <form method = "POST" action = {joinUrl}>
                          <input type = "submit" id = "join-btn" value = "Join" />
                        </form>

                        <form method = "POST" action = {exitUrl}>
                          <input type = "submit" id = "exit-btn" value = "Exit" />
                        </form>

                        <form method = "GET" action ={editUrl}>
                           <input type = "submit" id = "edit-btn" value = "Edit" />
                        </form>
                        <form method = "POST" action = {deleteUrl}>
                          <input type = "submit" id = "delete-btn" value = "Delete" />
                        </form>
                  </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Activity;
