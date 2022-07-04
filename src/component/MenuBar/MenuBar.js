import React from "react";
import classNames from "classnames/bind";
import Style from "./MenuBar.module.scss";
import MenuBarRow from "./MenuBarRow";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BiRadar } from "react-icons/bi";
import {
    MdOutlinePlayLesson,
    MdReplay,
    MdLiveTv,
    MdHistoryEdu,
    MdOutlineContactSupport,
} from "react-icons/md";
import { GrSchedulePlay, GrLike } from "react-icons/gr";
import { ImPlay } from "react-icons/im";
import { RiYoutubeLine } from "react-icons/ri";
import { GiSportMedal } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import { VscDebugBreakpointUnsupported } from "react-icons/vsc";

const cls = classNames.bind(Style);
function MenuBar() {
    return (
        <div className={cls("MenuBar")}>
            <MenuBarRow icon={<AiFillHome />} tilte={"Home"} />
            <MenuBarRow icon={<BiRadar />} tilte={"Khám phá"} />
            <MenuBarRow icon={<MdOutlinePlayLesson />} tilte={"Shorts"} />
            <MenuBarRow icon={<GrSchedulePlay />} tilte={"Kênh đăng ký"} />
            <MenuBarRow icon={<ImPlay />} tilte={"Thư viện"} />
            <MenuBarRow icon={<MdReplay />} tilte={"Video đã xem"} />
            <MenuBarRow icon={<RiYoutubeLine />} tilte={"Video của bạn"} />
            <MenuBarRow icon={<ImPlay />} tilte={"Xem sau"} />
            <MenuBarRow icon={<GrLike />} tilte={"Video đã thích"} />
            <div className={cls("MenuBarRow_Left")}>
                <p>DỊCH VỤ KHÁC CỦA TOUTUBE</p>
                <MenuBarRow icon={<FaGamepad />} tilte={"Trò chơi"} />
                <MenuBarRow icon={<MdLiveTv />} tilte={"Sự kiện trực tiếp"} />
                <MenuBarRow icon={<GiSportMedal />} tilte={"Thể thao"} />
            </div>
            <div className={cls("MenuBarRow_Setting")}>
                <p>DỊCH VỤ KHÁC CỦA TOUTUBE</p>
                <MenuBarRow icon={<AiFillSetting />} tilte={"Cài đặt"} />
                <MenuBarRow icon={<MdHistoryEdu />} tilte={"Lịch sử báo cáo"} />
                <MenuBarRow
                    icon={<MdOutlineContactSupport />}
                    tilte={"Trợ giúp"}
                />
                <MenuBarRow
                    icon={<VscDebugBreakpointUnsupported />}
                    tilte={"Gửi phản hồi"}
                />
            </div>
        </div>
    );
}

export default MenuBar;
