import { useState } from "react";
import c from "./LoginPage.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "../../api";
import { useAuthContext } from "../../context/useAuthContext";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { accessToken } = useAuthContext();

  console.log("accessToken", accessToken);

  const login = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login.mutateAsync({ email, password });
      navigate("/");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <section className={c.loginSection}>
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
      <h1>Login</h1>
      <form className={c.loginForm} onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={login.isPending}>
          Submit
        </button>
      </form>
    </section>
  );
}
