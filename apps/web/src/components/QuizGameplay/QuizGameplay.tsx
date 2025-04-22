import { useState } from "react";
import { useQuizQuestionsQuery } from "../../api/useQuizQuestionsQuery";
import QuestionAnswers from "./QuestionAnswers";
import { useSubmitQuizScore } from "../../api";
import c from "./QuizGameplay.module.css";
import Spinner from "../Spinner/Spinner";

export default function QuizGameplay({ quizId }: { quizId: string }) {
  const [score, setScore] = useState<number>(0);
  const [questionCount, setQuestionCount] = useState<number>(1);
  const { data, isFetching, isError, error } = useQuizQuestionsQuery(quizId);
  const { mutateAsync } = useSubmitQuizScore();

  let currentQuestion;

  if (data && data.length) {
    currentQuestion = data[questionCount - 1];
  }

  const handleSubmitQuizResult = () => {
    if (questionCount === 5) {
      mutateAsync({ score, quizId });
    }
    setQuestionCount((prev) => prev + 1);
  };

  const handleTryAgain = () => {
    setQuestionCount(1);
    setScore(0);
  };

  if (questionCount === 6) {
    return (
      <div className={c.finalScore}>
        <h3>
          Your score was: {score}/{questionCount - 1}
        </h3>
        <button onClick={handleTryAgain}>Try again</button>
      </div>
    );
  }

  if (!data?.length) {
    return <p>There are no questions for this quiz yet!</p>;
  }

  return (
    <>
      {isError ? (
        <p>{error?.message}</p>
      ) : (
        <>
          {currentQuestion && !isFetching ? (
            <div className={c.questionContainer}>
              <div className={c.statsContainer}>
                <p>Score: {score}</p>
                <p>
                  Question: {questionCount}/{data && data.length}
                </p>
              </div>

              <h3 className={c.question}>{currentQuestion.text}</h3>
              <QuestionAnswers
                questionId={currentQuestion.id}
                questionType={currentQuestion.type}
                handleSubmitQuizResult={handleSubmitQuizResult}
                setScore={setScore}
              />
            </div>
          ) : (
            <Spinner />
          )}
        </>
      )}
    </>
  );
}
