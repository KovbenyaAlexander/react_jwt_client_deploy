import AuthService from "../../../services/AuthService";
import { setAuth, setUser, setLoadingStatus } from "../actions";

const logout = () => {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    try {
      AuthService.logout();
      localStorage.removeItem("token");
      dispatch(setAuth(false));
      dispatch(setUser({}));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoadingStatus(false));
    }
  };
};

export default logout;
