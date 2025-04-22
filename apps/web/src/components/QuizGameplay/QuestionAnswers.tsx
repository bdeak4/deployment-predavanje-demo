import { useRef } from "react";
import { useQuestionAnswers } from "../../api/useQuestionAnswers";
import c from "./QuestionAnswers.module.css";
import Spinner from "../Spinner/Spinner";
import { Navigate } from "react-router";

type QuestionAnswers = {
  id: string;
  text: string;
  isCorrect: boolean;
  questionId: string;
};

type QuestionAnswerProps = {
  questionId: string;
  questionType: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  handleSubmitQuizResult: () => void;
};

export default function QuestionAnswers({
  questionId,
  questionType,
  setScore,
  handleSubmitQuizResult,
}: QuestionAnswerProps) {
  const typedAnswerRef = useRef<HTMLInputElement | null>(null);
  const { data, isFetching, isError, error } = useQuestionAnswers(questionId);

  const handleMultipleChoiceClick = (isCorrect: boolean) => {
    handleSubmitQuizResult();
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleAnswerSubmit = () => {
    handleSubmitQuizResult();
    if (
      data &&
      typedAnswerRef.current?.value.toLowerCase() === data[0].text.toLowerCase()
    ) {
      setScore((prev) => prev + 1);
    }
  };

  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (!data?.length) {
    return <Navigate to="/quiz" replace={true} />;
  }

  if (questionType === "MULTIPLE_CHOICE" || questionType === "TRUE_FALSE") {
    return (
      <div className={c.multipleChoiceContainer}>
        {data &&
          data.map((a: QuestionAnswers) => (
            <button
              key={a.id}
              onClick={() => handleMultipleChoiceClick(a.isCorrect)}
            >
              {a.text}
            </button>
          ))}
      </div>
    );
  } else if (questionType === "FILL_IN_THE_BLANK") {
    return (
      <div className={c.fillInTheBlankContainer}>
        <input type="text" ref={typedAnswerRef} />
        <button onClick={handleAnswerSubmit}>Submit</button>
      </div>
    );
  }

  return <div></div>;
}
