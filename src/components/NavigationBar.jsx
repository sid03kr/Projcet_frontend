import React, { Component } from "react";
// import axios from "axios"

import { Link } from "react-router-dom";

export default class NavigationBar extends Component {
  render() {
    return (
      <aside>
        <h4>
          <Link to={""} className="nav-link">
            Ildo's portfolio
          </Link>
        </h4>
        <ul>
          <li>
            <Link to={"/skill"} className="nav-link">
              skill
            </Link>
          </li>
          <li>
            <Link to={"/board"} className="nav-link">
              Q/A
            </Link>
          </li>
          <li>
            {/* <span>{cart.length}</span>{"  "} */}
            <Link to={"/cart"} className="nav-link">
              cart
            </Link>
          </li>
        </ul>
      </aside>
      // <Navbar bg="dark" variant="dark">
      //   <Link to={""} className="navbar-brand"></Link>
      //   <Navbar.Brand href="/">Home</Navbar.Brand>
      //   <Nav className="mr-auto">
      //     <Link to={"intro"} className="nav-link">
      //       INTRODUCE
      //     </Link>
      //     <Link to={"skill"} className="nav-link">
      //       SKILL
      //     </Link>
      //     <Link to={"cart"} className="nav-link">
      //       CART
      //     </Link>
      //     <Link to={"quest"} className="nav-link">
      //       Q/A
      //     </Link>
      //   </Nav>
      // </Navbar>
    );
  }
}
