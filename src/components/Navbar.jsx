import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/png/nav_logo.png";
import navImg from "../assets/img/png/nav_img.png";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
    const [first, setfirst] = useState(true);
    function showUl() {
      setfirst(!first);
    }
    if (!first) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  return (
    <div>
      <nav>
        <Container>
          <div
            className=" d-flex justify-content-between align-items-center flex-nowrap py_15"
            data-aos="fade-right"
          >
            <img src={logo} alt="logo" />
            <div className="max_w_692">
              <img className="w-100" src={navImg} alt="img" />
            </div>
          </div>
        </Container>
        <div className="nav_outline">
          <Container>
            <ul
              data-aos="fade-left"
              className={
                first
                  ? " d-flex flex-lg-row flex-column justify-content-center align-items-center mobile_nav justify-content-lg-end gap_15 nav py_29"
                  : " d-flex flex-lg-row flex-column justify-content-center align-items-center mobile_nav justify-content-lg-end gap_15 nav py_29 nav_left_100"
              }
            >
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">SNEAKERS KOPEN</a>
              </li>
              <li>
                <a href="#">INTERVIEWS</a>
              </li>
              <li>
                <a href="#">SALE</a>
              </li>
              <li>
                <a href="#">SNEAKER VAN DE DAG</a>
              </li>
              <li>
                <a href="#">SNEAKER FORUM</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
            </ul>
            <div className="d-lg-none d-flex justify-content-end position-relative z_11">
              <h3 onClick={showUl}>
                <BiMenuAltRight />
              </h3>
            </div>
          </Container>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
