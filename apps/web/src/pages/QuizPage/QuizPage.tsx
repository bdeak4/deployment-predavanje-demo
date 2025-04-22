import { useParams } from "react-router";
import { useQuizQuery } from "../../api";
import c from "./QuizPage.module.css";
import QuizGameplay from "../../components/QuizGameplay/QuizGameplay";
import imagePlaceholder from "../../assets/images/imagePlaceholder.png";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

export function QuizPage() {
  const { id } = useParams<{ id: string }>();
  const [isPlayed, setIsPlayed] = useState(false);

  const { data, isFetching, isError, error } = useQuizQuery(id ?? "");

  return (
    <section className={c.quizSection}>
      {isError ? (
        <p>{error.message}</p>
      ) : (
        <>
          {isFetching ? (
            <Spinner />
          ) : (
            <>
              <h1>{data?.title}</h1>
              {isPlayed ? (
                <QuizGameplay quizId={id ? id : ""} />
              ) : (
                <>
                  <img
                    src={data?.img || imagePlaceholder}
                    onError={(e) => (e.currentTarget.src = imagePlaceholder)}
                    alt={data?.title}
                  />
                  <button onClick={() => setIsPlayed(true)}>Play</button>
                </>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}
