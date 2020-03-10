var React = require("react")
const Layout = require("./Layout")

class Landing extends React.Component {
  render() {

    return (
      <Layout>
            <div className="container text-center" >
                <div className="row" style = {{backgroundColor: "#FFFFFF"}}>
                    <div className = "col-8">
                        <div className= "page-header d-flex">
                            <h3>Game,Set,Match!</h3>
                            <div className= "tagline"><p>The Community for Tennis Players </p>
                            </div>
                        </div>
                    </div>
                    <div className = "col-4">
                       <p> <a className = "btn btn-warning" href = "/register">Join Our Community</a></p>
                       <p> <a className = "btn btn-warning" href = "/login">Log In</a></p>
                    </div>
                    <div id="background"> </div>
                </div>
            </div>
        </Layout>
    );
  }
}

module.exports = Landing;
