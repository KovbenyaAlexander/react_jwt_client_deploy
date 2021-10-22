import { setAuth, setUser, setLoadingStatus } from "../actions";
import AuthService from "../../../services/AuthService";

const API_URL = "https://fast-wave-82088.herokuapp.com/api";

const checkAuth = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingStatus(true));
      const refreshToken = getCookie(`refreshToken`);
      console.log(`refrToken-->${refreshToken}`);

      const response = await AuthService.checkAuth(refreshToken);

      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
      dispatch(setLoadingStatus(false));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoadingStatus(false));
    }
  };
};

export default checkAuth;

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
