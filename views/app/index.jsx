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
        const activityId = activity.id;
        let url = '/activity/'+activityId;
        const title = activity.title;
        const venue = activity.address;
        const date = moment(activity.activity_date.toISOString().split("T")[0]).format("MMM DD YYYY");
        const start = activity.start_at.replace('+08', '');
          const formattedStart = moment(start).format('LT');
        const end = activity.end_at.replace('+08', '');
          const formattedEnd = moment(end).format('LT');

        console.log('activity details: ',activityId, title, venue, date, formattedStart, formattedEnd);
        return (

        <div className="card border-info mb-3">
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
                <p className="card-text">Venue: <span> {venue} </span> </p>
                <p className="card-text">Date: <span> {date} </span> </p>
                <p className="card-text">Time: <span> {formattedStart} - {end}</span> </p>
                  <a href={url} className="btn btn-info">View More</a>
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
                  {card}
                  </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Index;
