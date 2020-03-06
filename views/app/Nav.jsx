const React = require("react");

class Nav extends React.Component {
  render() {

  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a id="logo" href= "/">
              <div className="navbar-brand"><img src="#"/></div>
            </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Discover People <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/organise"> Organise an Activity</a>
              </li>
            </ul>
                <button type="button" className="btn btn-outline-success" href="#"> Log out</button>
          </div>
        </nav>
    );
  }
}
module.exports = Nav;
