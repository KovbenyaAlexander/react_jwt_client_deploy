import Form from "./components/Form";
import { useEffect } from "react";
import checkAuth from "./redux/actions/thunk/checkAuth";
import { connect } from "react-redux";
import logout from "./redux/actions/thunk/logout";
import getUsersData from "./redux/actions/thunk/getUsersData";
import UsersData from "./components/UsersData";
import Profile from "./components/Profile";
import Loader from "./components/Loader";
import "./App.css";

function App({ isAuth, checkAuth, isLoading }) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isAuth) {
    return (
      <div className="App">
        <Profile />
        <UsersData />
      </div>
    );
  }

  return (
    <div className="App">
      <Form />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    isAuth: state.isAuth,
    userEmail: state.user?.email,
    isActivated: state.user?.isActivated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => {
      dispatch(checkAuth());
    },
    logout: () => {
      dispatch(logout());
    },
    getUsersData: () => {
      dispatch(getUsersData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
