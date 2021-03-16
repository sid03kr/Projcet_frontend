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

import { Link } from "react-router-dom";

class Navigation extends Component {
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
            <Link to={"/board"} className="nav-link">
              Board
             </Link>
          </li>
        </ul>
      </aside>
    );
  }
}

export default Navigation;
