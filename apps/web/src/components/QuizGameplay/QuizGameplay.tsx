import { useState } from "react";
import { useQuizQuestionsQuery } from "../../api/useQuizQuestionsQuery";
import QuestionAnswers from "./QuestionAnswers";
import { useSubmitQuizScore } from "../../api";

export default function QuizGameplay({ quizId }: { quizId: string }) {
  const [score, setScore] = useState<number>(0);
  const [questionCount, setQuestionCount] = useState<number>(1);
  const { data } = useQuizQuestionsQuery(quizId);
  const { mutateAsync } = useSubmitQuizScore();

  let currentQuestion = null;

  if (data && data.length) {
    currentQuestion = data[questionCount - 1];
  }

  const handleSubmitQuizResult = () => {
    if (questionCount === 5) {
      mutateAsync({ score, quizId });
    }
    setQuestionCount((prev) => prev + 1);
  };

  if (questionCount === 6) {
    return (
      <div>
        <p>
          Your score was: {score}/{questionCount - 1}
        </p>
        <button>Try again</button>
      </div>
    );
  }

  return (
    <>
      {currentQuestion ? (
        <div>
          <p>Score: {score}</p>
          <p>
            Question: {questionCount}/{data.length}
          </p>
          <p>{currentQuestion.text}</p>
          <QuestionAnswers
            questionId={currentQuestion.id}
            questionType={currentQuestion.type}
            handleSubmitQuizResult={handleSubmitQuizResult}
            setScore={setScore}
          />
        </div>
      ) : (
        <p>Fetching question data...</p>
      )}
    </>
  );
}
