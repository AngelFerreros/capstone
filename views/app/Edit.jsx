const React = require("react");
const Layout = require("./Layout");
const Nav = require("./Nav");
const moment = require("moment");
moment().format();

class Edit extends React.Component {

  render() {
    const activity = this.props.activityDetails;

    let postEdit = '/activity/'+activity.id+'/?_method=put';
    let activityUrl = '/activity/'+activity.id;

    const attendeeArr = this.props.attendeeArr;
      const title = activity.title.toUpperCase();
      const description = activity.description;
      // const categoryVal = activity.category_id;
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
          <Nav userId = {this.props.userId}/>
            <div className="container">
                <div className = "row main-row">
                  <div className="col form">
                    <h2>Activity Details:</h2>
                    <form method = "POST" action={postEdit} className="needs-validation" noValidate>
                      <div className="form-group">
                        <label for="title">Title:</label>
                            <input type="text" className="form-control" id="title" defaultValue = {title} name="title" required/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <div className="form-group">
                        <label for="description">Description:</label>
                            <input type="text" className="form-control" id="description" defaultValue ={description} name="description" required/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <div className="form-group" required>
                        <div className="form-check">
                            <input className="category form-check-input" type="radio" name="category" id="rally" value="1" />
                            <label className="form-check-label" for="rally"> Rally </label>
                        </div>
                        <div className="form-check">
                            <input className="category form-check-input" type="radio" name="category" id="singles" value="2"/>
                                <label className="form-check-label" for="singles">Singles</label>
                        </div>
                        <div className="form-check">
                            <input className="category form-check-input" type="radio" name="category" id="doubles" value="3"/>
                                <label className="form-check-label" for="doubles">Doubles</label>
                        </div>
                        <div className="form-check">
                            <input className="category form-check-input" type="radio" name="category" id="training" value="4"/>
                                <label className="form-check-label" for="training">Training</label>
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="players">Players Needed:</label>
                            <select className="form-control" id="players" name = "players">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                            </select>
                      </div>
                      <div className="form-group">
                            <label for="date">Date:</label>
                            <input type="date" className="form-control" id="date" name="date" defaultValue = {date} required/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                      <div className="form-group">
                            <label for="start">Start Time:</label>
                            <input type="time" className="form-control" id="start" name="start" defaultValue = {start} required/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                      </div>
                        <div className="form-group">
                            <label for="end">End Time:</label>
                            <input type="time" className="form-control" id="end" name="end" defaultValue = {end} required/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                        </div>

                        <div className="form-group">
                            <label for="address">Venue:</label>
                            <input type="text" className="form-control" id="address" name="address" defaultValue = {venue}required/>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                        </div>

                        <input type = "submit" value = "Confirm" className="btn btn-info"/>
                    </form>

                    <form method = "GET" action = {activityUrl}>
                      <input type = "submit" value = "Cancel" className="btn btn-info"/>
                    </form>

                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Edit;
