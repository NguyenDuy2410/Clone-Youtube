import React from "react";
import classNames from "classnames/bind";
import Style from "./ContentRow.module.scss";
import { BsCheckCircleFill } from "react-icons/bs";
const cls = classNames.bind(Style);

function ContentRow({ image, avatar, title, time, usename, view, day }) {
    return (
        <div className={cls("ContentRow")}>
            <div className={cls("video")}>
                <p className={cls("ContentTime")}>{time}</p>
                <img className={cls("ContentImage")} src={image} />
            </div>
            <div className={cls("content")}>
                <img className={cls("ContentAvatar")} src={avatar} />
                <div className={cls("Video_text")}>
                    <h4>{title}</h4>
                    <div className={cls("ContentUsename")}>
                        <div>{usename}</div>
                        <BsCheckCircleFill />
                    </div>
                    <div>
                        <div className={cls("ContentView")}>{view}</div>
                        <div className={cls("ContentDay")}>{day}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentRow;
