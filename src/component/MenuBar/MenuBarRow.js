import React from "react";
import classNames from "classnames/bind";
import Style from "./MenuBarRow.module.scss";
const cls = classNames.bind(Style);
function MenuBarRow({ icon, tilte }) {
  return (
    <div className={cls("MenuBarRow")}>
      {icon}
      <p>{tilte}</p>
    </div>
  );
}

export default MenuBarRow;
