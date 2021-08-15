import React from "react";
import "../../assets/css/HomePage.css";
// import { NavLink, Link } from 'react-router-dom';
// import {Route, Switch} from "react-router";
import {Link } from "react-router-dom";
function Header() {
  return (
    
      <div className="navigator">
        <div className="nav-left">
          <Link to='/'>หน้าแรก</Link>
         <Link to="/ReviewRes">รีวิวร้านอาหาร</Link>
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
    
  );
}

export default Header;
