import React from "react";
import "../../assets/css/HomePage.css";
function Header() {
  return (
    <>
      <div className="navigator">
        <div className="nav-left">
          <a href="home.html">หน้าแรก</a>
          <a href="review-res.html">รีวิวร้านอาหาร</a>
          <a href="category-res.html">หมวดหมู่ร้านอาหาร</a>
        </div>
        <div className="nav-right">
          <a href="#" className="a-right">
            PANNAWAT ANANCHAITAM
          </a>
          <a href="contract.html" className="a-right">
            ติดต่อเรา
          </a>
          <a href="login.html" className="a-right">
            เข้าสู่ระบบ
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
