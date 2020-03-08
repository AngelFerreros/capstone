const React = require("react")
const Layout = require("./Layout")
const Nav = require("./Nav")
const moment = require('moment')
moment().format();

class Index extends React.Component {
  render() {
    console.log('Index data: ', this.props.activities);
    let activityArr = this.props.activities;

// create cards for individual activity
    let card;
    if (activityArr){
      card = activityArr.map( (activity,index) => {
        const activityId = activity.id
        const title = activity.title
        const venue = activity.address
        const date = moment(activity.activity_date.toISOString().split("T")[0]).format("MMM DD YYYY")
        const start = activity.start_at.replace('+08', '')
          const formattedStart = moment(start).format('LT')
        const end = activity.end_at.replace('+08', '')
          const formattedEnd = moment(end).format('LT')

        console.log('activity details: ',title, venue, date, formattedStart, formattedEnd)
        return (
        <div className="card">
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
                <p className="card-text">Venue: <span> {venue} </span> </p>
                <p className="card-text">Date: <span> {date} </span> </p>
                <p className="card-text">Time: <span> {formattedStart} - {end}</span> </p>
                  <a href="/activity/{activityId}" className="btn btn-warning">View More</a>
          </div>
        </div>
        );
      });
    }

    return (
        <Layout>
          <Nav/>
            <div className = "container">
              <div className ="card-container">
                <div className = "d-flex row card-row">
                {card}
                </div>
              </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Index;
