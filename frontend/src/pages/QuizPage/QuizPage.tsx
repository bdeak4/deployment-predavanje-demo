import { useEffect } from "react";
import { fetchQuizes } from "../../api";
import { useAuthContext } from "../../context";
import { useSearchParams } from "react-router";

type QuizzesType = {
  id: string;
  title: string;
  img: string;
  categoryId: string;
  createdAt: string;
};

export function QuizPage() {
  const { accessToken } = useAuthContext();
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const categoryId = searchParams.get("category") || "";

  const quizzes = fetchQuizes(accessToken!, title, categoryId);

  useEffect(() => {
    const getQuizzes = async () => {
      await quizzes.mutateAsync();
    };

    getQuizzes();
  }, [title, categoryId]);

  console.log(quizzes.data);

  return (
    <section>
      <h1>Quizzes</h1>
      <div>
        {Array.isArray(quizzes.data) &&
          quizzes.data.map((q: QuizzesType) => <div>{q.title}</div>)}
      </div>
    </section>
  );
}
