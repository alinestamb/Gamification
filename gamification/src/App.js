// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StartLearning from '.\src\mainpages\StartLearning.js';
import HowToPlay from '.\src\mainpages\HowToPlay.js';
import AboutUs from '.\src\mainpages\AboutUs.js';

function App(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/start-learning">Start Learning</Link>
            </li>
            <li>
              <Link to="/how-to-play">How to Play</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" component={HomePage} />
        <Route path="startlearning" component={StartLearning} />
        <Route path="/how-to-play" component={HowToPlay} />
        <Route path="/about-us" component={AboutUs} />
      </div>
    </Router>
  );
};

const HomePage = () => {
  return <h1>Welcome to the Home Page</h1>;
};

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

