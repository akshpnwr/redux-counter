import classes from "./Auth.module.css";
import UserProfile from "./UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";
import { Fragment } from "react";
const Auth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <Fragment>
      {isAuthenticated ? (
        <UserProfile />
      ) : (
        <main className={classes.auth}>
          <section>
            <form onSubmit={loginHandler}>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button type="submit">Login</button>
            </form>
          </section>
        </main>
      )}
    </Fragment>
  );
};

export default Auth;
