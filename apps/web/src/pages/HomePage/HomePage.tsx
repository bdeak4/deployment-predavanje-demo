import { jwtDecode } from "jwt-decode";
import { useAuthContext } from "../../context";
import c from "./HomePage.module.css";

export const HomePage = () => {
  const { accessToken } = useAuthContext();
  let userName;

  if (accessToken) {
    const decoded: any = jwtDecode(accessToken);
    userName = decoded.name;
  }

  return (
    <section className={c.homePageSection}>
      <h1>Welcome, {userName}! Get ready for the best quiz in the world!</h1>
      <p>
        From curious minds to trivia pros — everyone’s welcome! <br />
        Start playing and see how far you can go.
      </p>
    </section>
  );
};
