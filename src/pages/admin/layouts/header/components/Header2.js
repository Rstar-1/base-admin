import React from "react";
import FeatherIcon from "feather-icons-react";
import logo from "../../../../../assets/logo.png";

const Header2 = () => {
  return (
    <div className="bgwhite border-h2 flex justify-between items-center px16 py10 md-py6 sm-py6 md-px6 sm-px8">
      <div className="flex items-center gap-10">
        <img src={logo} alt="logo" className="header-logo" />
        <div>
          <h1 className="fsize18 md-fsize16 sm-fsize14 font-600 mtpx3 sm-mtpx1 mbpx1">
            Super admin
          </h1>
          <p className="texttertiary fsize14 sm-fsize12 sm-fsize12 font-500 mtpx1 md-mbpx1 sm-mbpx1 mbpx3">
            Welcome
          </p>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <FeatherIcon
          icon="calendar"
          className="textgray cursor-pointer"
          size={20}
        />
        <FeatherIcon
          icon="align-left"
          className="textgray hidden md-block sm-block cursor-pointer"
          size={24}
        />
        <FeatherIcon
          icon="log-out"
          className="textgray hidden md-hidden sm-block cursor-pointer"
          size={20}
        />
        <button className="border-0 sm-hidden cursor-pointer font-500 textwhite rounded-5 ptpx10 pbpx10 md-ptpx6 md-pbpx6 md-plpx16 md-prpx16 md-fsize14 plpx25 prpx25 fsize14 bgprimary">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header2;
