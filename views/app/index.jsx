const React = require("react");
const Footer = require("./Footer");
const Nav = require("./Nav");
const moment = require('moment');
moment().format();

class Index extends React.Component {

  render() {
    console.log('Index data: ', this.props.activities);
    let activityArr = this.props.activities;

// create cards for individual activity
    let card;
    if (activityArr){
      card = activityArr.map( (activity,index) => {
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
                  <a href="#" className="btn btn-warning">View More</a>
          </div>
        </div>
        );
      });
    }

    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <title>Game,Set, Match</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
          <link rel="stylesheet" href="/styles.css" type = "text/css" />
        </head>
        <body>
          <Nav/>
            <div className = "container">
              <div className = "row">
                {card}
              </div>
            </div>
          <Footer/>
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Index;
