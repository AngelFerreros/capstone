const React = require("react")
const Layout = require("./Layout")
const Nav = require("./Nav")
const moment = require('moment')


class Index extends React.Component {

  render() {
    console.log('Index data: ', this.props.activities);
    let activityArr = this.props.activities;

// create cards for individual activity
    let card;
    let today = moment().format('MMM DD YYYY');
    console.log('today is:', today)
    if (activityArr){
      card = activityArr.map( (activity,index) => {
        const activityId = activity.id;
        let url = '/activity/'+activityId;
        const title = activity.title;
        const venue = activity.address;
        const date = moment(activity.activity_date.toISOString().split("T")[0]).format("MMM DD YYYY");

        const start = activity.start_at;
        const end = activity.end_at;
        const parseString = "HH:mm:ss ZZ";
          const formattedStart = moment.parseZone(start,parseString).format('h:mm a');
          const formattedEnd = moment.parseZone(end,parseString).format('h:mm a');

        console.log('activity details: ',activityId, title, venue, date, formattedStart, formattedEnd);
        if(date >= today){
          console.log('hrhsgsdv', activity.activity_date >= today)
          return (
          <div className="card border-info mb-3">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                  <p className="card-text">Venue: <span> {venue} </span> </p>
                  <p className="card-text">Date: <span> {date} </span> </p>
                  <p className="card-text">Time: <span> {formattedStart} - {formattedEnd}</span> </p>
                    <a href={url} className="btn btn-info">View More</a>
            </div>
          </div>
          );
        }
        else{
          return (
          <div className="card border-info mb-3">
            <div className="card-body">
              CLOSED ACTIVITY
                <h5 className="card-title">{title}</h5>
                  <p className="card-text">Venue: <span> {venue} </span> </p>
                  <p className="card-text">Date: <span> {date} </span> </p>
                  <p className="card-text">Time: <span> {formattedStart} - {formattedEnd}</span> </p>
            </div>
          </div>
          );
        }
      });
    }


    return (
        <Layout>
          <Nav userId = {this.props.userId}/>
              <div className = "container">
                <p> Sort Date:</p>
                <div className = "col-auto">
                  <form method = "GET" action = "/dashboard" >
                    <select name = "sortby" class="custom-select mr-sm-2" >
                      <option value ="ASC">Ascending</option>
                      <option value = "DESC">Descending</option>
                    </select>
                    <input type="submit" className = "btn btn-info" value = "Submit"/>
                  </form>
                </div>
                  <div className = "row card-row justify-content-around p-4 text-center">
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
