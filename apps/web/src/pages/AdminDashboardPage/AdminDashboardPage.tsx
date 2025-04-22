import c from "./AdminDashboardPage.module.css";
import leaderboardImg from "../../assets/images/leaderboardImg.png";
import createQuizImg from "../../assets/images/createQuizImg.png";
import { useNavigate } from "react-router";

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  return (
    <section className={c.adminDashboardPageSection}>
      <h1>Dashboard</h1>

      <div className={c.cardsContainer}>
        <div className={c.card} onClick={() => navigate("/admin/leaderboard")}>
          <img src={leaderboardImg} />
          <h3>Leaderboard</h3>
        </div>

        <div className={c.card} onClick={() => navigate("/admin/create-quiz")}>
          <img src={createQuizImg} />
          <h3>Create quiz</h3>
        </div>
      </div>
    </section>
  );
}
