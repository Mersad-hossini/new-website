import React from "react";
import "./Footer.css"

export default function Footer(props) {
  return (
    <footer style={{position: 'relative', zIndex: '1'}}>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 590"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
        {...props}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="70%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef" />
            <stop offset="95%" stopColor="#8ED1FC" />
          </linearGradient>
        </defs>
        <path
          d="M 0,600 L 0,225 C 112.71428571428572,250 225.42857142857144,275 331,257 C 436.57142857142856,239 535.0000000000001,178 669,196 C 802.9999999999999,214 972.5714285714287,311 1107,329 C 1241.4285714285713,347 1340.7142857142858,286 1440,225 L 1440,600 L 0,600 Z"
          stroke="none"
          strokeWidth={0}
          fill="url(#gradient)"
          fillOpacity={1}
          className="transition-all duration-300 ease-in-out delay-150 path-0 svgBg"
        />
      </svg>

      <div className="containerFormFooter">
        <form className="formFooter">
          <input
            type="email"
            placeholder="لطفا ایمیل خود را وارد کنید"
            required
          />
          <input type="submit" value="ثبت نام" />
        </form>
        <ul className="list-footer">
          <li>
            <a href="#">درباره ما</a>
          </li>
          <li>
            <a href="#">رسید ها</a>
          </li>
          <li>
            <a href="#">وجوهات</a>
          </li>
          <li>
            <a href="#">ارتباط با ما</a>
          </li>
          <li>
            <a href="#">راهنما</a>
          </li>
        </ul>
        <div className="social-media">
          <div className="instagram">
            <p>instagram.com</p>
            <a href="#">
              <img
                src="./images/instagram.png"
                alt="img instagram"
              />
            </a>
          </div>
          <div className="watsapp">
            <p>watsapp.com</p>
            <a href="">
              <img
                src="./images/whatsapp.png"
                alt="img watsapp"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
