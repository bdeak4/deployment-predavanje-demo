import { useParams } from "react-router";
import c from "./QuizPage.module.css";
import { QuizDetails } from "../../components/QuizDetails/QuizDetails";

export function QuizPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <section className={c.quizSection}>
      <QuizDetails quizId={id ? id : ""} />
    </section>
  );
}
