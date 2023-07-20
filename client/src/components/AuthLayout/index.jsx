import { Fragment } from "react";
import "./styles.css";

const AuthLayout = ({ children }) => {
  return (
    <Fragment>
      {/* Buiild navbar here */}
      <main>{children}</main>
      {/* Build footer here */}
    </Fragment>
  );
};

export default AuthLayout;
