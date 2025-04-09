import { useQuizzesQuery } from "../../api";
import { useNavigate, useSearchParams } from "react-router";
import c from "./QuizzesPage.module.css";

type QuizzesType = {
  id: string;
  title: string;
  img: string;
  categoryId: string;
  createdAt: string;
};

export function QuizzesPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const title = searchParams.get("title") || "";
  const categoryId = searchParams.get("category") || "";

  const { data, isFetching, isError, error } = useQuizzesQuery(
    title,
    categoryId
  );

  const handleQuizClick = (quizId: string) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <section className={c.quizzesSection}>
      <h1>Quizzes</h1>
      {isFetching ? (
        <p>{isError ? error.message : "Fetching data..."}</p>
      ) : (
        <div className={c.quizzesContainer}>
          {Array.isArray(data) &&
            data.map((q: QuizzesType) => (
              <div
                key={q.id}
                className={c.quizBox}
                onClick={() => handleQuizClick(q.id)}
              >
                <img src={q.img} alt={q.title} />
                <h3>{q.title}</h3>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}
