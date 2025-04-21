import { useNavigate } from "react-router-dom";
import c from "./404Page.module.css";

export function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className={c.pageNotFoundSection}>
      <div className={c.header}>
        <h1>404</h1>
        <h3>Page Not Found</h3>
      </div>

      <p>That's not the right answer! Try again.</p>

      <button onClick={() => navigate(-1)}>Go Back</button>

      <div className={`${c.fallingPaper} ${c.paper1}`}>404</div>
      <div className={`${c.fallingPaper} ${c.paper2}`}>404</div>
      <div className={`${c.fallingPaper} ${c.paper3}`}>404</div>
      <div className={`${c.fallingPaper} ${c.paper4}`}>404</div>
      <div className={`${c.fallingPaper} ${c.paper5}`}>404</div>
    </section>
  );
}
