import React from "react";
import Spider from "../Spider/Spider";
import classNames from "classnames/bind";
import Style from "./Content.module.scss";
import ContentRow from "./ContentRow";
const cls = classNames.bind(Style);

function Content() {
    return (
        <div className={cls("Content")}>
            <Spider />
            <div className={cls("content_items")}>
                <ContentRow
                    image=".\image\netque.jpg"
                    avatar=".\image\netque1.jpg"
                    title="Tết Miền Tây | Nét Quê"
                    time="19:20"
                    usename="Nét Quê"
                    view="1tr lượt xem"
                    day="1 tuần"
                />
                <ContentRow
                    image=".\image\ghehang.jpg"
                    avatar=".\image\ghehang1.jpg"
                    title="Ghe Hàng Vlog"
                    time="29:02"
                    usename="GheHàngVlog"
                    view="18N luot xem"
                    day="1 tháng"
                />
                <ContentRow
                    image=".\image\muagat.jpg"
                    avatar=".\image\muagat.jpg"
                    title="Thử thách ăn cóc"
                    time="16:31"
                    usename="Mùa Gặt"
                    view="3Tr lượt xem"
                    day="3 năm"
                />
                <ContentRow
                    image=".\image\music.jpg"
                    avatar=".\image\muisic1.jpg"
                    title="QUÊN ĐẶT TÊN"
                    time="6:14"
                    usename="Phạm Nguyễn Ngọc"
                    view="345N lượt xem"
                    day="9 ngày"
                />
                <ContentRow
                    image=".\image\khoahocf8.jpg"
                    avatar=".\image\khoahocf81.jpg"
                    title="300 bài code thiếu nha"
                    time="21:26"
                    usename="F8 Official"
                    view="15N lượt xem"
                    day="7 Ngày"
                />
                <ContentRow
                    image=".\image\khoai.jpg"
                    avatar=".\image\khoai1.jpg"
                    title="Mùa vải"
                    time="16:05"
                    usename="Khoai Lang Thang"
                    view="2Tr lượt xem"
                    day="1 tháng"
                />
                <ContentRow
                    image=".\image\blackadam.jpg"
                    avatar=".\image\blackadam1.jpg"
                    title="BLACK ADAM"
                    time="3:00"
                    usename="The Rock"
                    view="17Tr lượt xem"
                    day="1 tuần"
                />
                <ContentRow
                    image=".\image\khoai2.jpg"
                    avatar=".\image\khoai1.jpg"
                    title="Đám cưới miền tây"
                    time="45:54"
                    usename="Khoai Lang Thang"
                    view="6.8Tr lượt xem"
                    day="2 năm"
                />
                <ContentRow
                    image=".\image\datkka.jpg"
                    avatar=".\image\datkka1.jpg"
                    title="Tình Thu Sai Hạ Buồn"
                    time="5:09"
                    usename="DatKaa Official"
                    view="2Tr6 lượt xem"
                    day="4 tuần"
                />
            </div>
        </div>
    );
}

export default Content;
