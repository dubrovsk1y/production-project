import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  // For theme initialization, we need to add className for body
  useEffect(() => {
    document.body.className = theme;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // For user initialization
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
