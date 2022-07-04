import React from "react";
import classNames from "classnames/bind";
import style from "./Spider.module.scss";

const cls = classNames.bind(style);

function Spider() {
  return (
    <div className={cls("Spider")}>
      <div className={cls("Spider_menu")}>
        <span>Tất cả</span>
        <span>Danh sách kết hợp</span>
        <span>Âm nhạc</span>
        <span>Trò chơi</span>
        <span>Trực tiếp</span>
        <span>Chương trình nấu ăn</span>
        <span>Du lịch</span>
        <span>Toán học</span>
        <span>Đọc rap</span>
        <span>Hoạt hình</span>
        <span>Thú cưng</span>
        <span>Mới tải lên gần đây</span>
        <span>Đã xem</span>
        <span>Đề xuất mới</span>
      </div>
    </div>
  );
}

export default Spider;
