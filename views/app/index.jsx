var React = require("react");

class Index extends React.Component {

  render() {
    console.log('Index data: ', this.props.activities);
    let activityArr = this.props.activities;
    let activities = activityArr.map((activity,index) => <li key = {index} id = {index}>{activity.title}</li>);

    return (
      <html>
        <head />
        <body>
          <h3>Hello</h3>
          <ul>{activities}</ul>
        </body>
      </html>
    );
  }
}

module.exports = Index;
