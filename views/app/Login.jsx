var React = require("react");

class Login extends React.Component {
  render() {
    let postLogin = '/myvax/login';
    let homeUrl = '/';

    return (
      <html>
          <head>
          <title>Log In</title>
          <meta charSet = "UTF-8"/>
           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
           <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet"/>
          </head>
          <body>
            <div className="container-fluid text-center">
                <div className = "jumbotron" style = {{backgroundImage:"url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/2560px-Flag_of_Singapore.svg.png')", backgroundSize: "cover", opacity:"0.8"}}>
                    <h1 style ={{fontFamily: "'Josefin Sans', 'sans-serif'", color:"#191919"}}>myVax</h1>
                        <p style={{color:"#191919"}}>A digital vaccination record for Singaporeans</p>
                </div>
            </div>
            <div id="login" className="container-fluid text-left">
            <h2>Log In</h2>
                <div className="row" style = {{paddingLeft:"20px"}}>
                  <form method = "POST" action={postLogin}>
                        <p>EMAIL ADDRESS
                        <input type="email" name= "email" placeholder="Enter your email address"/></p>
                        <p>PASSWORD
                        <input type="password" name="password" placeholder="Enter your password"/> </p>
                        <input type = "submit" value="Login"/>
                  </form>
                </div>
                <div className="row" style = {{paddingLeft:"20px"}}>
                  <form method = "GET" action = {homeUrl}>
                    <p><input type = "submit" value = "Cancel"/></p>
                  </form>
                </div>
            </div>
          </body>
      </html>
    );
  }
}

module.exports = Login;
