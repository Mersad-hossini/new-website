import React, { useState } from "react";
import "./Header.css";

export default function Header() {

  return (
    <>
      <header>
        <div className="imgHead">
          <img
            src="./images/header.jpg"
            alt="image header, Be patient and patient"
          />
        </div>
        <div className="navbar">
          <ul className="listNavbar">
            <li>
              <a href="#">خانه</a>
            </li>
            <li>
              <a href="#">منو</a>
              <div id="menuNavbarList">
                <ul className="menuNav">
                  <li id="listMenu">
                    <a href="#">test1</a>
                  </li>
                  <li id="listMenu">
                    <a href="#"></a>test1
                  </li>
                  <li id="listMenu">
                    <a href="#"></a>test1
                  </li>
                  <li id="listMenu">
                    <a href="#"></a>test1
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">رسیدها</a>
            </li>
            <li>
              <a href="#">ارتباط با ما</a>
            </li>
            <li>
              <a href="#">زبان</a>
            </li>
            <li>
              <a href="#vojohat">پرداخت وجوهات</a>
            </li>
            <li>
              <a href="#containerSlider">راهنما</a>
            </li>
            <li>
              <a href="#signin">ثبت نام</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
