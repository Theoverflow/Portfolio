import React from 'react';
import './Game.css';

// import {BrowserRouter as Router, Switch,
//   Route, Link, useRouteMatch, useParams} from 'react-router-dom';

const Game = ({theme}) => (
  <body className="body">
    <main className={`main ${theme}`}>
      <h1>So, you want to play ?</h1>
      <p>Try to know me better !</p>
    </main>
  </body>
)

export default Game;
