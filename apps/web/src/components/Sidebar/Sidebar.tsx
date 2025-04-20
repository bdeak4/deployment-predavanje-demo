import { useNavigate } from "react-router";
import { useAuthContext } from "../../context";
import { jwtDecode } from "jwt-decode";
import c from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
}) {
  const { accessToken, setAccessToken } = useAuthContext();
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);

  let userName;

  if (accessToken) {
    const decoded: any = jwtDecode(accessToken);
    userName = decoded.name;
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
        setIsOpen();
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
      <h3>{userName}</h3>

      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={setIsOpen}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={setIsOpen}
          >
            Quizzes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/leaderboard"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={setIsOpen}
          >
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={setIsOpen}
          >
            Profile
          </NavLink>
        </li>
      </ul>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
