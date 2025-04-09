import { useQuizQuery } from "../../api";
import c from "./QuizDetails.module.css";

export function QuizDetails({ quizId }: { quizId: string }) {
  const { data, isFetching, isError, error } = useQuizQuery(quizId);

  if (isFetching) return <p>Fetching quiz data...</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <div className={c.quizDetails}>
        <h1>{data?.title}</h1>
        <button>Play</button>
      </div>
      <img src={data?.img} alt={data?.title} className={c.quizImg} />
    </>
  );
}
