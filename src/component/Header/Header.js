import React from "react";
import classNames from "classnames/bind";
import style from "./Header.module.scss";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { ImYoutube2 } from "react-icons/im";
import { FaKeyboard, FaMicrophone } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { GrNewWindow, GrNotification } from "react-icons/gr";
import { CgMenuGridR } from "react-icons/cg";
const cls = classNames.bind(style);
function Header() {
  return (
    <div className={cls("Header")}>
      <div className={cls("header_left")}>
        <AiOutlineMenuUnfold className={cls("youtube")} />
        <div className={cls("youtubes")}>
          <IoLogoYoutube className={cls("youtube1")} />
          <ImYoutube2 className={cls("youtube2")} />
        </div>
      </div>
      <div className={cls("header_center")}>
        <div className={cls("header_search")}>
          <input type="text" placeholder=" Tìm kiếm" />
          <FaKeyboard />
          <button>
            <BiSearchAlt />
          </button>
        </div>
        <div>
          <FaMicrophone />
        </div>
      </div>
      <div className={cls("header_right")}>
        <CgMenuGridR />
        <GrNewWindow />
        <GrNotification />
        <img src="avatar.png" className={cls("avatar")} alt="" />
      </div>
    </div>
  );
}

export default Header;
