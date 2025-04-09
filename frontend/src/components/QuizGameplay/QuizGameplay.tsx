import { useState } from "react";
import { useQuizQuestionsQuery } from "../../api/useQuizQuestionsQuery";
import QuestionAnswers from "./QuestionAnswers";

export default function QuizGameplay({ quizId }: { quizId: string }) {
  const [questionCount, setQuestionCount] = useState(1);
  const { data, isFetching, isError, error } = useQuizQuestionsQuery(quizId);
  let currentQuestion = null;

  if (data && data.length) {
    currentQuestion = data[questionCount - 1];
  }

  return (
    <>
      {currentQuestion ? (
        <div>
          <p>{currentQuestion.text}</p>
          <QuestionAnswers
            questionId={currentQuestion.id}
            questionType={currentQuestion.type}
          />
        </div>
      ) : (
        <p>Fetching question data...</p>
      )}
    </>
  );
}
