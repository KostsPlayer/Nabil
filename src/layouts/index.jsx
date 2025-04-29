import PropTypes from "prop-types";
import Navbar from "./navbar";
import Footer from "./footer";
import Setup from "../components/setup";
import { useSetupContext } from "../contexts/setupContext";

function Layout({ children }) {
  const { darkMode, showLines } = useSetupContext();

  return (
    <>
      <div
        className={`layout ${darkMode ? "darkmode__bg darkmode__text" : ""}`}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
      <div className="body__lines">
        <span
          className={`${darkMode ? "" : "default"} ${
            showLines ? "" : "hidden"
          }`}
        ></span>
        <span
          className={`${darkMode ? "" : "default"} ${
            showLines ? "" : "hidden"
          }`}
        ></span>
        <span
          className={`${darkMode ? "" : "default"} ${
            showLines ? "" : "hidden"
          }`}
        ></span>
        <span
          className={`${darkMode ? "" : "default"} ${
            showLines ? "" : "hidden"
          }`}
        ></span>
        <span
          className={`${darkMode ? "" : "default"} ${
            showLines ? "" : "hidden"
          }`}
        ></span>
      </div>
      <div className={`credit ${darkMode ? "" : "default"}`}>
        <span className={`${darkMode ? "" : "default"}`}>
          &copy; KostsPlayer Studio 2025.
        </span>
        All rights reserved.
      </div>
      <Setup />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
