import { useState } from "react";
import login from "../redux/actions/thunk/login";
import registration from "../redux/actions/thunk/registration";
import { connect } from "react-redux";
import "materialize-css";
import css from "./Form.module.css";

const Form = ({ login, registration }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={css.formWrapper}>
      <div className={`input-field col s6 `}>
        <input
          autoComplete="off"
          type="text"
          id="email_input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="email_input">Email</label>
      </div>

      <div className={`input-field col s6 `}>
        <input
          autoComplete="off"
          type="password"
          id="passrowd_input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label htmlFor="passrowd_input">Password</label>
      </div>

      <div className={css.buttonsWrapper}>
        <button
          className={`waves-effect btn waves-light btn-small`}
          onClick={() => login(email, password)}
        >
          Login
        </button>
        <button
          className={`waves-effect btn waves-light btn-small`}
          onClick={() => registration(email, password)}
        >
          Registration
        </button>
      </div>
      <p></p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    registration: (email, password) => dispatch(registration(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
