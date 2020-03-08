var React = require("react")
const Layout = require("./Layout")

class Landing extends React.Component {
  render() {

    return (
      <Layout>
            <div className="container text-center" >
                <div className="row" style = {{backgroundColor: "#FFFFFF"}}>
                    <div className = "col-8">
                        <div className= "page-header">
                            <h3>Content</h3>
                            <div className= "tagline"><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
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
