import { useQuestionAnswers } from "../../api/useQuestionAnswers";

type QuestionAnswers = {
  id: string;
  text: string;
  isCorrect: boolean;
  questionId: string;
};

export default function QuestionAnswers({
  questionId,
  questionType,
}: {
  questionId: string;
  questionType: string;
}) {
  const { data, isFetching, isError, error } = useQuestionAnswers(questionId);

  if (questionType === "MULTIPLE_CHOICE") {
    return (
      <div>{data && data.map((a: QuestionAnswers) => <p>{a.text}</p>)}</div>
    );
  } else if (questionType === "TRUE_FALSE") {
    return (
      <div>
        <p>TRUE</p>
        <p>FALSE</p>
      </div>
    );
  } else if (questionType === "FILL_IN_THE_BLANK") {
    return (
      <div>
        <input type="text" />
        <button>Submit</button>
      </div>
    );
  }

  return <div></div>;
}
