import React from 'react';
import './Project.css';

// import {BrowserRouter as Router, Switch,
//   Route, Link, useRouteMatch, useParams} from 'react-router-dom';

const Projects = ({theme}) => (
  <body className="body">
    <main className={`main ${theme}`}>
      <h1>HEY ! This is my Projects page</h1>
      <p>I am a French dynamic student engineer !</p>
    </main>
  </body>
)

export default Projects;
