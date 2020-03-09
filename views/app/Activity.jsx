const React = require("react");
const Layout = require("./Layout");
const Nav = require("./Nav");
const moment = require("moment");
moment().format();

class Activity extends React.Component {

  render() {
    const activity = this.props.activityDetails
    const title = activity.title
    const description = activity.description
    const venue = activity.address
    const date = moment(activity.activity_date.toISOString().split("T")[0]).format("MMM DD YYYY")
    const start = activity.start_at.replace('+08', '')
    const formattedStart = moment(start).format('LT')
    const end = activity.end_at.replace('+08', '')
    const formattedEnd = moment(end).format('LT')

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
                        <p>Attendees:</p><span> (slots left i.e 2/4) </span>

                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Activity;
