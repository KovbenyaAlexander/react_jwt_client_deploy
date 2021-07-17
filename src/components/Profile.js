import { connect } from "react-redux";
import logout from "../redux/actions/thunk/logout";
import getUsersData from "../redux/actions/thunk/getUsersData";
import css from "./Profile.module.css";

const Profile = ({ user, getUsersData, logout }) => {
  if (user) {
    const { email, id, isActivated } = user;
    return (
      <div className={css.Profile}>
        <div className={`card-panel grey lighten-5 z-depth-1 ${css.card}`}>
          <table className={`${css.table} highlight`}>
            <tbody>
              <tr>
                <td>Your Email</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Your id</td>
                <td>{id}</td>
              </tr>
              <tr>
                <td>Is your email confirmed</td>
                <td>{isActivated ? "yes" : "no"}</td>
              </tr>
            </tbody>
          </table>

          <button
            className={`waves-effect btn waves-light btn-small`}
            onClick={logout}
          >
            Logout
          </button>
        </div>
        <button
          className={`waves-effect btn waves-light btn-small ${css.getUsersBtn}`}
          onClick={getUsersData}
        >
          Get users
        </button>
      </div>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
    getUsersData: () => {
      dispatch(getUsersData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
