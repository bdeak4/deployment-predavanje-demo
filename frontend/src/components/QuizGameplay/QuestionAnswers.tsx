import { useRef, useState } from "react";
import { useQuestionAnswers } from "../../api/useQuestionAnswers";

type QuestionAnswers = {
  id: string;
  text: string;
  isCorrect: boolean;
  questionId: string;
};

type QuestionAnswerProps = {
  questionId: string;
  questionType: string;
  setQuestionCount: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

export default function QuestionAnswers({
  questionId,
  questionType,
  setQuestionCount,
  setScore,
}: QuestionAnswerProps) {
  const typedAnswerRef = useRef<HTMLInputElement | null>(null);
  const { data, isFetching, isError, error } = useQuestionAnswers(questionId);

  const handleMultipleChoiceClick = (isCorrect: boolean) => {
    setQuestionCount((prev) => prev + 1);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleAnswerSubmit = () => {
    setQuestionCount((prev) => prev + 1);
    if (
      typedAnswerRef.current?.value.toLowerCase() === data[0].text.toLowerCase()
    ) {
      setScore((prev) => prev + 1);
    }
  };

  if (questionType === "MULTIPLE_CHOICE" || questionType === "TRUE_FALSE") {
    return (
      <div>
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
      <div>
        <input type="text" ref={typedAnswerRef} />
        <button onClick={handleAnswerSubmit}>Submit</button>
      </div>
    );
  }

  return <div></div>;
}
