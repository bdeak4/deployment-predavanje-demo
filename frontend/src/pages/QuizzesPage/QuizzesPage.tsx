import { useQuizzesQuery } from "../../api";
import { useSearchParams } from "react-router";

type QuizzesType = {
  id: string;
  title: string;
  img: string;
  categoryId: string;
  createdAt: string;
};

export function QuizzesPage() {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const categoryId = searchParams.get("category") || "";

  const { data } = useQuizzesQuery(title, categoryId);

  return (
    <section>
      <h1>Quizzes</h1>
      <div>
        {Array.isArray(data) &&
          data.map((q: QuizzesType) => <div key={q.id}>{q.title}</div>)}
      </div>
    </section>
  );
}
