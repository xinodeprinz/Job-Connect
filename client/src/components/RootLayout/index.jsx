import { Fragment } from "react";
import "./styles.css";

const RootLayout = ({ children }) => {
  return (
    <Fragment>
      {/* Build navbar here */}
      <main>{children}</main>
      {/* Build footer here */}
    </Fragment>
  );
};

export default RootLayout;
