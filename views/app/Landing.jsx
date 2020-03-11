var React = require("react")
const Layout = require("./Layout")

class Landing extends React.Component {
  render() {

    return (
      <Layout>
            <div id="background"> </div>
            <div className="container" >
                <div className="row text-center">
                    <div className = "col">
                        <div className= "page-header">
                            <h1 id ="app-name" >Game,Set,Match!</h1>
                            <div id= "tagline"><p>The Community for Tennis Players </p></div>
                       <p> <a className = "btn btn-warning" href = "/register">Join Our Community</a>  <a className = "btn btn-warning" href = "/login">Log In</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Landing;
