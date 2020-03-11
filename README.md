Project #4:

An embedded screenshot of the app:
<img src = "Game-Set-Match.png"> </img>


General approach:
- Thought of a 'problem to solve' or how to improve on things.
- Developed the ERD and made it scalable(as much as possible).
- Created a wireframe and visualized how the workflow will be.

User Stories:
- Tennis players of all levels who do not have easy access to tennis courts want to be able to play in or around their area by connecting with other players who have access.
- Tennis players can find other players of a similar skill level, organize or join events (i.e. rallies, matches,coaching session).
- More advanced Tennis players who are willing to teach others in an informal setting do not have the platform or network to do so.

ERD:
https://github.com/AngelFerreros/capstone/blob/master/Capstone%20Project_%20ERD.pdf

Wireframes:
https://github.com/AngelFerreros/capstone/blob/master/gsm_wireframe.pdf

Technologies used:
- Express (MVC)
- React.js
- PostgresSQL
- Javascript
- CSS/Bootstrap
- Heroku
- Google Places API

Installation instructions (for any dependencies):
- Use npm init and npm install.
- Install express, react, react dom and express-react-views
- Install moment.js for date formatting

Descriptions of any unsolved problems or major hurdles:
- Input validations in the controllers. (i.e. Making sure a player cannot join an activity multiple times).
- User authentication, before any GET requests.
