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
          <NavItem>
            <Link to="/about">소개</Link>
          </NavItem>
          <NavItem>
            <Link to="/board">게시판</Link>
          </NavItem>
          <NavItem>
            <Link to="/myboard">내 글보기</Link>
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
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #d1d8e4;
`;

const NavList = styled.ul`
  width: 1080px;
  display: flex;
  margin: 0 auto;
`;

const NavItem = styled.li`
  width: 60px;
  margin-left: 18px;
  margin-top: 5px;
  display: flex;
`;
