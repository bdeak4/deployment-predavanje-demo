import { useNavigate } from "react-router";
import { useAuthContext } from "../../context";
import { jwtDecode } from "jwt-decode";
import c from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import userIcon from "../../assets/images/user-svgrepo-com.svg";
import logoutIcon from "../../assets/images/logout-svgrepo-com.svg";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [userRole, setUserRole] = useState("USER");
  const { accessToken, setAccessToken } = useAuthContext();
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);

  let userName;
  let role;

  if (accessToken) {
    const decoded: any = jwtDecode(accessToken);
    userName = decoded.name;
    role = decoded.role;
  }

  const handleLogout = async () => {
    localStorage.removeItem("access_token");
    setAccessToken("");
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      className={`${c.sidebar} ${isOpen ? c.activeSidebar : ""}`}
      ref={sidebarRef}
    >
      <h3>
        <img src={userIcon} alt="user icon" />
        {userName}
      </h3>

      {role === "ADMIN" && (
        <div className={c.navLinks}>
          <a
            className={userRole === "USER" ? c.activeRole : ""}
            onClick={() => setUserRole("USER")}
          >
            User
          </a>
          <a
            className={userRole === "ADMIN" ? c.activeRole : ""}
            onClick={() => setUserRole("ADMIN")}
          >
            Admin
          </a>
        </div>
      )}

      {userRole === "USER" ? (
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? c.active : "")}
              onClick={() => setIsOpen(false)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quiz"
              className={({ isActive }) => (isActive ? c.active : "")}
              onClick={() => setIsOpen(false)}
            >
              Quizzes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rating"
              className={({ isActive }) => (isActive ? c.active : "")}
              onClick={() => setIsOpen(false)}
            >
              Rating
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? c.active : "")}
              onClick={() => setIsOpen(false)}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? c.active : "")}
              onClick={() => setIsOpen(false)}
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/leaderboard"
              className={({ isActive }) => (isActive ? c.active : "")}
              onClick={() => setIsOpen(false)}
            >
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/create-quiz"
              className={({ isActive }) => (isActive ? c.active : "")}
              onClick={() => setIsOpen(false)}
            >
              Create quiz
            </NavLink>
          </li>
        </ul>
      )}

      <button onClick={handleLogout}>
        Logout <img src={logoutIcon} alt="logout icon" />
      </button>
    </div>
  );
}
