import c from "./Navbar.css";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="" alt="NASA logo" />
      </div>
      <div className="nav-links">
        <div className="desktop-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Quizzes
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
