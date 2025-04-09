import { useState } from "react";
import { useQuizQuestionsQuery } from "../../api/useQuizQuestionsQuery";
import QuestionAnswers from "./QuestionAnswers";

export default function QuizGameplay({ quizId }: { quizId: string }) {
  const [score, setScore] = useState<number>(0);
  const [questionCount, setQuestionCount] = useState<number>(1);
  const { data, isFetching, isError, error } = useQuizQuestionsQuery(quizId);
  let currentQuestion = null;

  if (data && data.length) {
    currentQuestion = data[questionCount - 1];
  }

  if (questionCount === 6) {
    return (
      <div>
        <p>
          Your score was: {score}/{questionCount - 1}
        </p>
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
            setQuestionCount={setQuestionCount}
            setScore={setScore}
          />
        </div>
      ) : (
        <p>Fetching question data...</p>
      )}
    </>
  );
}
