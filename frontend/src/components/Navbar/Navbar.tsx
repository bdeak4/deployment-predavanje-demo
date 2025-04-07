import c from "./Navbar.module.css";
import QuizLogo from "../../assets/images/QuizLogo.png";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../context";
import { fetchQuizCategories } from "../../api";
import { useEffect, useRef } from "react";

type CategoriesType = { id: string; name: string; createdAt: string };

export function Navbar() {
  const { setAccessToken, accessToken } = useAuthContext();
  const navigate = useNavigate();
  const quizCategories = fetchQuizCategories(accessToken!);

  const categoryRef = useRef<HTMLSelectElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);

  const handleSearchQuizzes = () => {
    const selectedTitle = titleRef.current?.value || "";
    const selectedCategory = categoryRef.current?.value || "";

    const searchParams = new URLSearchParams();
    if (selectedTitle) searchParams.append("title", selectedTitle);
    if (selectedCategory) searchParams.append("category", selectedCategory);

    navigate(`/quiz?${searchParams}`);
  };

  const handleLogout = async () => {
    localStorage.removeItem("access_token");
    setAccessToken(null);
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    const getCategories = async () => {
      if (!accessToken) return;
      await quizCategories.mutateAsync();
    };

    getCategories();
  }, [accessToken]);

  return (
    <nav>
      <div
        className={c.logo}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={QuizLogo} alt="Quiz logo" />
        <h2>uizizz</h2>
      </div>
      <div className={c.navActions}>
        <div className={c.searchQuiz}>
          <select
            name="quizCategory"
            id="quizCategory"
            defaultValue=""
            ref={categoryRef}
          >
            <option value="">All</option>
            {Array.isArray(quizCategories.data) &&
              quizCategories.data.map((qc: CategoriesType) => (
                <option key={qc.id} value={qc.id}>
                  {qc.name}
                </option>
              ))}
          </select>
          <input type="text" placeholder="Quiz search..." ref={titleRef} />
          <button onClick={handleSearchQuizzes}>Search</button>
        </div>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
