import { useRef } from "react";
import c from "./LoginPage.module.css";
import { NavLink } from "react-router-dom";
import { useLogin } from "../../api";

export function LoginPage() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { mutateAsync, isPending, isError, error } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailRef.current?.value && passwordRef.current?.value) {
      try {
        await mutateAsync({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
      } catch (err: any) {
        console.log(err.message);
      }
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
          <input type="email" placeholder="Email" ref={emailRef} required />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            minLength={6}
            required
          />
        </label>
        <button type="submit" disabled={isPending}>
          Submit
        </button>
        {isError && <p>{error.message}</p>}
      </form>
    </section>
  );
}
