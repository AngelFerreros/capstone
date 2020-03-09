const React = require("react");
const Layout = require("./Layout");
const Nav = require("./Nav");
const moment = require("moment");
moment().format();

class Edit extends React.Component {

  render() {
    let postEdit = '/activity/'+this.props.activity.id+'/?_method=put' ;

    const activity = this.props.activityDetails;
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
           hostDisplay = "(Host)"
         return <li>{attendee.username} {hostDisplay}</li>
        } else {
         return <li>{attendee.username}</li>
        }
    });

    return (
        <Layout>
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
                        <form method = "POST" action ={postEdit}>
                          <input type = "submit" value = "Confirm"/>
                        </form>
                        <form method = "GET" action = {joinUrl}>
                          <input type = "submit" value = "Join"/>
                        </form>



                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Edit;
