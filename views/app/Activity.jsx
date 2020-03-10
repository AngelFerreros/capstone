const React = require("react");
const Layout = require("./Layout");
const Nav = require("./Nav");
const moment = require("moment");
moment().format();

class Activity extends React.Component {

  render() {
    const activity = this.props.activityDetails;

    let joinUrl = '/activity/'+activity.id ;
    let editUrl = '/activity/'+activity.id+'/edit' ;
    let deleteUrl = '/activity/'+activity.id+'/delete';

    const attendeeArr = this.props.attendeeArr;
      const title = activity.title.toUpperCase();
      const description = activity.description;
      const venue = activity.address;
      const date = moment(activity.activity_date.toISOString().split("T")[0]).format("MMM DD YYYY");
      const start = activity.start_at.replace('+08', '');
      const formattedStart = moment(start).format('LT');
      const end = activity.end_at.replace('+08', '');
      const formattedEnd = moment(end).format('LT');

    const attendees = attendeeArr.map( (attendee , id) => {
      let host = attendee.ishost;
      let hostDisplay;
        if(host){
           hostDisplay = "(Host)";
           // hideJoinBtn();
         return <li key = {id} value = {id}>{attendee.username} {hostDisplay} </li>
        } else {
          // hideHostBtns()
         return <li>{attendee.username}</li>
        }
    });

    return (
        <Layout onLoad>
          <Nav/>
            <div className="container">
                <div className = "row">
                  <div className="col">
                    <h2>Activity Details:</h2>
                      <p>Title: {title} </p>
                      <p>Description: {description}</p>


                        <p>Date:{date}</p>
                        <p>Time:</p>
                        <p>Venue:</p>
                        <p id = "addressToMap">{venue}</p>
                        <div id = "map"> </div>
                        <p>Attendees:</p>
                        <a href ="#"> <ul>{attendees} </ul> </a>
                        <form method = "POST" action = {joinUrl}>
                          <input type = "submit" id = "join-btn" value = "Join"/>
                        </form>
                        <form method = "GET" action ={editUrl}>
                          <input type = "submit" id = "edit-btn" value = "Edit"/>
                        </form>
                        <form method = "POST" action = {deleteUrl}>
                          <input type = "submit" id = "delete-btn" value = "Delete"/>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Activity;
