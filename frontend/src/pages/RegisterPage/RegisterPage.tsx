import { NavLink } from "react-router-dom";
import c from "./RegisterPage.module.css";
import { useRef, useState } from "react";
import { useRegister } from "../../api";
export function RegisterPage() {
  const [inputError, setInputError] = useState<string>("");
  const { mutateAsync, isPending, isError, error } = useRegister();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const repeatedPasswordRef = useRef<HTMLInputElement | null>(null);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputError("");

    if (passwordRef.current?.value !== repeatedPasswordRef.current?.value) {
      setInputError("Passwords must match!");
      return;
    }

    if (
      nameRef.current?.value &&
      emailRef.current?.value &&
      passwordRef.current?.value
    ) {
      mutateAsync({
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
    }
  };

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
      <form className={c.registerForm} onSubmit={handleOnSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            placeholder="Name"
            minLength={3}
            required
            ref={nameRef}
          />
        </label>
        <label>
          Email:{" "}
          <input type="email" placeholder="Email" required ref={emailRef} />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            placeholder="Password"
            minLength={6}
            required
            ref={passwordRef}
          />
        </label>
        <label>
          Repeat password:{" "}
          <input
            type="password"
            placeholder="Repeat password"
            required
            ref={repeatedPasswordRef}
          />
        </label>
        <button type="submit" disabled={isPending}>
          {isPending ? "Registering..." : "Submit"}
        </button>
        {inputError && <p>{inputError}</p>}
        {isError && <p>{error.message}</p>}
      </form>
    </section>
  );
}
