import * as React from 'react';
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App container">
          <Navbar fluid collapseOnSelect>
              <Navbar.Header>
                  <Navbar.Brand>
                      <Link to="/">Scratch</Link>
                  </Navbar.Brand>
                  <Navbar.Toggle/>
              </Navbar.Header>
          </Navbar>
      </div>
    );
  }
}

export default App;
