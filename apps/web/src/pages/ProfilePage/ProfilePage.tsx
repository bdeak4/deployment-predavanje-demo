import { FormEvent, useRef, useState } from "react";
import {
  useUpdateUserName,
  useUpdateUserPassword,
  useUserQuery,
} from "../../api";
import c from "./ProfilePage.module.css";
import Spinner from "../../components/Spinner/Spinner";

export default function ProfilePage() {
  const [changeData, setChangeData] = useState("");
  const userQuery = useUserQuery();
  const updateUserName = useUpdateUserName();
  const updateUserPassword = useUpdateUserPassword();

  const userNameRef = useRef<HTMLInputElement | null>(null);
  const userNewPasswordRef = useRef<HTMLInputElement | null>(null);
  const userCurrentPasswordRef = useRef<HTMLInputElement | null>(null);

  const handleCancelAction = () => {
    setChangeData("");
  };

  const handleUpdateName = async (e: FormEvent) => {
    e.preventDefault();
    if (userNameRef.current?.value) {
      await updateUserName.mutateAsync({ name: userNameRef.current.value });
      await userQuery.refetch();
    }
    setChangeData("");
  };

  const handleUpdatePassword = (e: FormEvent) => {
    e.preventDefault();
    if (
      userNewPasswordRef.current?.value &&
      userCurrentPasswordRef.current?.value
    ) {
      updateUserPassword.mutateAsync({
        password: userNewPasswordRef.current.value,
        currentPassword: userCurrentPasswordRef.current.value,
      });
    }
    setChangeData("");
  };

  if (userQuery.isFetching) {
    return (
      <section className={c.profilePageSection}>
        <h1>Profile</h1>
        <Spinner />
      </section>
    );
  }

  if (userQuery.isError) {
    return (
      <section className={c.profilePageSection}>
        <h1>Profile</h1>
        <p>{userQuery.error.message}</p>
      </section>
    );
  }

  return (
    <section className={c.profilePageSection}>
      <h1>Profile</h1>
      <div className={c.profileDataContainer}>
        {changeData === "name" ? (
          <form onSubmit={handleUpdateName}>
            <label>
              <strong>Name:</strong>{" "}
              <input
                type="text"
                defaultValue={userQuery.data?.name}
                minLength={3}
                required
                ref={userNameRef}
              />
            </label>
            <div className={c.buttonsContainer}>
              <button type="submit">Submit</button>
              <button type="button" onClick={handleCancelAction}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <p>
            <span>
              <strong>Name:</strong> {userQuery.data?.name}
            </span>
            <button onClick={() => setChangeData("name")}>Change</button>
          </p>
        )}

        <p>
          <span>
            <strong>Email:</strong> {userQuery.data?.email}
          </span>
        </p>

        {changeData === "password" ? (
          <form onSubmit={handleUpdatePassword}>
            <label>
              <strong>Current password:</strong>{" "}
              <input
                type="password"
                minLength={6}
                required
                ref={userCurrentPasswordRef}
              />
            </label>
            <label>
              <strong>New password:</strong>{" "}
              <input
                type="password"
                minLength={6}
                required
                ref={userNewPasswordRef}
              />
            </label>
            <div className={c.buttonsContainer}>
              <button type="submit">Submit</button>
              <button type="button" onClick={handleCancelAction}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button onClick={() => setChangeData("password")}>
            Change password
          </button>
        )}
        {updateUserName.isSuccess && (
          <p className={c.success}>Username changed successfully!</p>
        )}
        {updateUserName.isError && (
          <p className={c.error}>{updateUserName.error.message}</p>
        )}

        {updateUserPassword.isSuccess && (
          <p className={c.success}>User password changed successfully!</p>
        )}
        {updateUserPassword.isError && (
          <p className={c.error}>{updateUserPassword.error.message}</p>
        )}

        {updateUserName.isPending || updateUserPassword.isPending ? (
          <div className={c.spinnerContainer}>
            <Spinner />
          </div>
        ) : null}
      </div>
    </section>
  );
}
