import c from "./RatingPage.module.css";
import rankingImage from "../../assets/images/rankingImage.png";
import { useUserRankingQuery } from "../../api";
import { useAuthContext } from "../../context";
import { jwtDecode } from "jwt-decode";

export default function RatingPage() {
  const { accessToken } = useAuthContext();
  let userId;

  if (accessToken) {
    const decoded: any = jwtDecode(accessToken);
    userId = decoded.sub;
  }

  const { data, isFetching, isError, error } = useUserRankingQuery(userId);

  return (
    <section className={c.ratingPageSection}>
      <h1>Ranking</h1>
      {isError ? (
        <p>{error.message}</p>
      ) : (
        <>
          {isFetching ? (
            <p>Fetching data...</p>
          ) : (
            <>
              <div className={c.imageContainer}>
                <h3>{data?.rating}</h3>
                <img src={rankingImage} alt="ranking image" />
              </div>
              <p>This is your current world ranking!</p>
            </>
          )}
        </>
      )}
    </section>
  );
}
