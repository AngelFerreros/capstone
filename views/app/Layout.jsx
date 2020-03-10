const React = require("react");

class Layout extends React.Component {

  render() {

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
            <div id = "layout-container">
            {this.props.children}
            </div>
            <footer id="footer">
                <div className="footer-container text-center">
                    <small id ="footer-text">&copy;2020 Made with ❤️🎾 by Angel Ferreros  </small>
                </div>
            </footer>
            <script type= "text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0mU_z1ODp6PjIxdxewMWW9559ZzoerOA&libraries=places&callback=activateAutocomplete"></script>
            <script src = '/script.js'> </script>
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>

        </body>
      </html>
    );
  }
}

module.exports = Layout;
