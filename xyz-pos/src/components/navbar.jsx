import React, { useState } from "react";
import { Link as LinktoBerlangganan, animateScroll as scroll  } from "react-scroll";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackgroundNavbar = () => {
    if (window.scrollY >= 100) setNavbar(true);
    else setNavbar(false);
  };

  window.addEventListener("scroll", changeBackgroundNavbar);
  return (
    <nav
      className={
        navbar ? "container-red-navbar" : "container-transparant-navbar"
      }
    >
      <div className="logo" onClick={() => scroll.scrollToTop()}>
        {/* <Link className="router" to="/"> */}
        <h1 className={navbar ? "font-lighter-white" : "font-lighter"}>xyz</h1>
        <h1 className={navbar ? "font-bolder-white" : "font-bolder"}>POS</h1>
        {/* </Link> */}
      </div>
      <div>
        <ul className="logo">
          <li className={navbar ? "list-white" : "list"}>
            {/* <Link className="router" to="/"> */}
            Fitur
            {/* </Link> */}
          </li>
          <li className={navbar ? "list-white" : "list"}>
            <LinktoBerlangganan to="toPelajari" smooth={true} duration={1000}>
              <div className="berlangganan-navbar">Berlangganan</div>
            </LinktoBerlangganan>
          </li>
          <li className={navbar ? "list-white" : "list"}>
            <button
              // onClick={buttonMasuk}
              className={navbar ? "button-sign-in-red" : "button-sign-in"}
            >
              Masuk
            </button>
            {/* <Link className="router button grow" to="/register"> */}
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}
