import { NavLink } from "react-router-dom";
import c from "./RegisterPage.module.css";
export function RegisterPage() {
  return (
    <section className={c.registerSection}>
      <div className={c.navLinks}>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? c.active : "")}
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? c.active : "")}
        >
          Register
        </NavLink>
      </div>
      <h1>Register</h1>
      <form className={c.registerForm}>
        <label>
          Email: <input type="email" placeholder="Email" required />
        </label>
        <label>
          Password: <input type="password" placeholder="Password" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
