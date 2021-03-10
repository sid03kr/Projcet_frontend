// import React, { Component } from "react";
// import Login from "../components/Login";

// import { Link } from "react-router-dom";

// export default class NavigationBar extends Component {
//   render() {
//     return (
//       <aside>
//         <h4>
//           <Link to={""} className="nav-link">
//             Ildo's portfolio
//           </Link>
//         </h4>
//         <ul>
//           <li>
//             <Link to={"/board"} className="nav-link">
//               Q/A
//             </Link>
//           </li>
//           <li>
//             <Login />
//           </li>
//         </ul>
//       </aside>
//     );
//   }
// }

import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <Nav>
        <NavList>
          <NavLogo>
            <Link to="/">Ildo's portfolio</Link>
          </NavLogo>
          <NavItem>
            <Link to="/about">Introduce</Link>
          </NavItem>
          <NavItem>
            <Link to="/board">Board</Link>
          </NavItem>
          <NavItem>
            <Link to="/mypage">마이페이지</Link>
          </NavItem>
        </NavList>
      </Nav>
    );
  }
}

export default Navigation;

const Nav = styled.div`
  width: 300px;
  height: 100vh;
  float: left;
  background-color: #ebebeb;
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
`;

const NavLogo = styled.h4`
  color: #545454;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 30px;
`;

const NavList = styled.ul`
  color: #5c5c5c;
  font-size: 11px;
`;

const NavItem = styled.li`
  width: 100px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 14px;
`;
