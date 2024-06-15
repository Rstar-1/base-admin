import React, { useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../../../../redux/colorredux/ColorSlice";

const Header1 = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <div className="bgcard border-h1 flex justify-between items-center px16 py10 md-py6 sm-py6 md-px8 sm-px8">
      <div className="flex items-center gap-10">
        <img
          src="https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-2.webp"
          alt="logo"
          className="header-logo rounded-full"
        />
        <div>
          <h1 className="fsize18 textdark md-fsize16 sm-fsize14 font-600 mtpx3 sm-mtpx1 mbpx1">
            Super admin
          </h1>
          <p className="textgray fsize14 sm-fsize12 sm-fsize12 font-500 mtpx1 md-mbpx1 sm-mbpx1 mbpx3">
            Welcome
          </p>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <FeatherIcon
          icon="align-left"
          className="textgray hidden md-block sm-block cursor-pointer"
          size={20}
        />
        <FeatherIcon
          className="textgray hidden md-block sm-block cursor-pointer"
          size={20}
        />
        <FeatherIcon
          icon="settings"
          className="textgray hidden md-block sm-block cursor-pointer"
          size={20}
        />
        <FeatherIcon
          onClick={handleToggle}
          icon={darkMode ? "moon" : "sun"}
          className="textgray hidden md-block sm-block cursor-pointer"
          size={20}
        />
        <FeatherIcon
          icon="log-out"
          className="textgray hidden md-hidden sm-block cursor-pointer"
          size={20}
        />
        <button className="border-0 sm-hidden cursor-pointer font-500 rounded-5 p10 bgprimary">
          <FeatherIcon
            icon="user"
            className={darkMode ? "textdark flex" : "textwhite flex"}
            size={16}
          />
        </button>
        <button className="border-0 sm-hidden cursor-pointer font-500 rounded-5 p10 bgsecondary">
          <FeatherIcon
            icon="settings"
            className={darkMode ? "textdark flex" : "textwhite flex"}
            size={16}
          />
        </button>
        <button
          onClick={handleToggle}
          className={
            darkMode
              ? "border-0 sm-hidden cursor-pointer font-500 rounded-5 p10 bg-glass"
              : "border-0 sm-hidden cursor-pointer font-500 rounded-5 p10 bgsuccess"
          }
        >
          {darkMode ? (
            <>
              <FeatherIcon icon="moon" className="textdark flex" size={16} />
            </>
          ) : (
            <>
              <FeatherIcon icon="sun" className="textwhite flex" size={16} />
            </>
          )}
        </button>
        <button className="border-0 sm-hidden cursor-pointer font-500 rounded-5 p10 bgwarning">
          <FeatherIcon
            icon="log-out"
            className={darkMode ? "textdark flex" : "textwhite flex"}
            size={16}
          />
        </button>
      </div>
    </div>
  );
};

export default Header1;
