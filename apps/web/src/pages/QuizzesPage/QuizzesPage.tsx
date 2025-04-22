import { useQuizzesQuery } from "../../api";
import { useNavigate, useSearchParams } from "react-router";
import c from "./QuizzesPage.module.css";
import imagePlaceholder from "../../assets/images/imagePlaceholder.png";
import Spinner from "../../components/Spinner/Spinner";

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

  if (!data?.length) {
    return (
      <section className={c.quizzesSection}>
        <h1>Quizzes</h1>
        <p>There are no quizzes yet!</p>
      </section>
    );
  }

  return (
    <section className={c.quizzesSection}>
      <h1>Quizzes</h1>
      {isError ? (
        <p>{error.message}</p>
      ) : (
        <>
          {isFetching ? (
            <Spinner />
          ) : (
            <div className={c.quizzesContainer}>
              {data.map((q: QuizzesType) => (
                <div
                  key={q.id}
                  className={c.quizBox}
                  onClick={() => handleQuizClick(q.id)}
                >
                  <img
                    src={q.img}
                    onError={(e) => (e.currentTarget.src = imagePlaceholder)}
                    alt={q.title}
                  />
                  <h3>{q.title}</h3>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
