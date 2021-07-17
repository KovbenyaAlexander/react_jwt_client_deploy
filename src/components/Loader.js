import React from "react";
import Loader from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader_ = () => {
  return (
    <div className={css.LoaderWrapper}>
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader_;
