import { useParams } from "react-router";
import { useQuizQuery } from "../../api";
import c from "./QuizPage.module.css";
import QuizGameplay from "../../components/QuizGameplay/QuizGameplay";
import { useState } from "react";

export function QuizPage() {
  const { id } = useParams<{ id: string }>();
  const [isPlayed, setIsPlayed] = useState(false);

  const { data, isFetching, isError, error } = useQuizQuery(id ? id : "");

  return (
    <section className={c.quizSection}>
      {isFetching ? (
        <p>{isError ? error.message : "Fetching quiz data..."}</p>
      ) : (
        <>
          <h1>{data?.title}</h1>
          {isPlayed ? (
            <QuizGameplay quizId={id ? id : ""} />
          ) : (
            <>
              <img src={data?.img} alt={data?.title} />
              <button onClick={() => setIsPlayed(true)}>Play</button>
            </>
          )}
        </>
      )}
    </section>
  );
}
