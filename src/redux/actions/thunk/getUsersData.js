import UserService from "../../../services/UserService";
import { setLoadingStatus, setUsersData } from "../actions";

const getUsersData = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingStatus(true));
      const response = await UserService.getUsers();
      dispatch(setUsersData(response.data));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoadingStatus(false));
    }
    dispatch(setLoadingStatus(false));
  };
};

export default getUsersData;
