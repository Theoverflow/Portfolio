import React from 'react';
import './Contact.css';

// import {BrowserRouter as Router, Switch,
//   Route, Link, useRouteMatch, useParams} from 'react-router-dom';

const Contact = ({theme}) => (
  <body className="body">
    <main className={`main ${theme}`}>
      <h1>Meet Theo Marini</h1>
      <p>Follow me or Send me messages throught these networks </p>
    </main>
  </body>
)

export default Contact;
