import React from "react";
import "../../assets/css/HomePage.css";
// import { NavLink, Link } from 'react-router-dom';
// import {Route, Switch} from "react-router";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="navigator">
      <div className="nav-left">
        <Link to="/">หน้าแรก</Link>
        <Link to="/ReviewRes">รีวิวร้านอาหาร</Link>
        <Link to="/CategoryRes">หมวดหมู่ร้านอาหาร</Link>
      </div>
      <div className="nav-right">
        <Link to="/" className="a-right">
          PANNAWAT ANANCHAITAM
        </Link>
        <Link to="/Contract" className="a-right">
          ติดต่อเรา
        </Link>
        <Link to="/Login" className="a-right">
          เข้าสู่ระบบ
        </Link>
      </div>
    </div>
  );
}

export default Header;
