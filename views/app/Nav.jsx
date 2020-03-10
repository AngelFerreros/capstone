const React = require("react");

class Nav extends React.Component {
  render() {
    let profilePath =  '/players/'+this.props.userId;


  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a id="logo" href= "/dashboard">
              <div className="navbar-brand"><img src="#"/></div>
            </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <li className="nav-item active">
                <a className="nav-link" href={profilePath}> Profile </a>
              </li>
                <a className="nav-link" href="/players">Discover People </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/organise"> Organise an Activity</a>
              </li>
            </ul>
            <form method = "POST" action = "/logout">
                <input type="submit" className= "btn btn-warning" value = "Log Out"/>
            </form>
          </div>
        </nav>
    );
  }
}
module.exports = Nav;
