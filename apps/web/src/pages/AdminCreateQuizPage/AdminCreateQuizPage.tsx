import { FormEvent, useRef } from "react";
import c from "./AdminCreateQuizPage.module.css";
import { useCreateQuiz, useQuizCategoriesQuery } from "../../api";

type CategoriesType = { id: string; name: string; createdAt: string };

export default function AdminCreateQuizPage() {
  const { data } = useQuizCategoriesQuery();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLSelectElement | null>(null);

  const { mutateAsync, isSuccess, isError, error } = useCreateQuiz();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      titleRef.current?.value &&
      imageRef.current?.value &&
      categoryRef.current?.value
    ) {
      mutateAsync({
        title: titleRef.current?.value,
        img: imageRef.current?.value,
        categoryId: categoryRef.current?.value,
      });

      titleRef.current.value = "";
      imageRef.current.value = "";
      categoryRef.current.value = "";
    }
  };

  return (
    <section className={c.adminCreateQuizPageSection}>
      <h1>Create quiz</h1>

      <form onSubmit={handleFormSubmit} className={c.createQuizForm}>
        <label>
          Title:{" "}
          <input type="text" ref={titleRef} placeholder="Title" required />
        </label>
        <label>
          Image URL:{" "}
          <input type="url" ref={imageRef} placeholder="Image URL" required />
        </label>

        <label>
          Category:{" "}
          <select
            name="quizCategory"
            id="quizCategory"
            defaultValue=""
            required
            ref={categoryRef}
          >
            <option value="">All</option>
            {Array.isArray(data) &&
              data.map((qc: CategoriesType) => (
                <option key={qc.id} value={qc.id}>
                  {qc.name}
                </option>
              ))}
          </select>
        </label>

        <button type="submit">Submit</button>

        {isError && <p className={c.error}>{error.message}</p>}
        {isSuccess && <p className={c.success}>Quiz created successfully!</p>}
      </form>
    </section>
  );
}
