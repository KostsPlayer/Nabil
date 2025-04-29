import { useState } from "react";
import { useSetupContext } from "../../contexts/setupContext";

function Setup() {
  const [hoveredSetup, setHoveredSetup] = useState(false);
  const [showSetup, setShowSetup] = useState(false);

  const { setDarkMode, darkMode, showLines, setShowLines } = useSetupContext();

  return (
    <>
      <div
        className="setup__display"
        onClick={() => {
          setShowSetup(!showSetup);

          if (showSetup) {
            setHoveredSetup(false);
          }
        }}
      >
        <div
          className={`text ${hoveredSetup ? "active" : ""} ${
            darkMode ? "darkmode__text" : ""
          }`}
        >
          Customize
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="transparent"
          className="bi bi-gear-wide-connected icon"
          width="28"
          height="28"
          viewBox="0 0 16 16"
          stroke={`${darkMode ? "#fff" : "#000"}`}
          strokeWidth=".8"
          onMouseEnter={() => setHoveredSetup(true)}
        >
          <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z" />
        </svg>
      </div>
      <div className={`setup__content ${showSetup ? "active" : ""}`}>
        <div
          className="setup__content__item"
          onClick={() => setDarkMode(!darkMode)}
        >
          <div className={`text ${darkMode ? "darkmode__text" : ""}`}>
            Dark Mode
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill={`${darkMode ? "#fff" : "#000"}`}
            className="bi bi-circle-half icon"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16" />
          </svg>
        </div>
        <div
          className="setup__content__item"
          onClick={() => setShowLines(!showLines)}
        >
          <div className={`text ${darkMode ? "darkmode__text" : ""}`}>
            Vertical Lines
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill={`${darkMode ? "#fff" : "#000"}`}
            className="bi bi-soundwave icon"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Setup;
