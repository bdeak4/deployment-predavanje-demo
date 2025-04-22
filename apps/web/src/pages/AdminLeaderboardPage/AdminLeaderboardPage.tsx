import { useLeaderboardQuery } from "../../api";
import Spinner from "../../components/Spinner/Spinner";
import c from "./AdminLeaderboardPage.module.css";

export default function AdminLeaderboardPage() {
  const { data, isFetching, isError, error } = useLeaderboardQuery();

  return (
    <section className={c.adminLeaderboardPageSection}>
      <h1>Leaderboard</h1>

      {isError ? (
        <p>{error.message}</p>
      ) : (
        <>
          {isFetching ? (
            <Spinner />
          ) : (
            <table className={c.leaderboardTable}>
              <thead className={c.tableHead}>
                <tr>
                  <th>Rating</th>
                  <th>Name</th>
                  <th>Quizzes Completed</th>
                  <th>Total Score</th>
                </tr>
              </thead>
              <tbody className={c.tableBody}>
                {data?.length ? (
                  data.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.quizCount}</td>
                      <td>{user.totalScore}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>No users found</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </>
      )}
    </section>
  );
}
