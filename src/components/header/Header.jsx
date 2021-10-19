import React from "react";
import "../../assets/css/HomePage.css";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { removeToken } from "../../services/localStorage";
import { useHistory } from "react-router";
// import { NavLink, Link } from 'react-router-dom';
// import {Route, Switch} from "react-router";
import { Link } from "react-router-dom";
function Header() {
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);
  function clearToken() {
    removeToken();
    setUser(null);
    history.push("/");
  }
  console.log(user);
  return (
    <div className="navigator-header" style={{ opacity:0.85}}>
      <div className="nav-left-header">
        <Link to="/" className="nav-text">หน้าแรก</Link>
        <Link to="/ReviewRes" className="nav-text">รีวิวร้านอาหาร</Link>
        <Link to="/CategoryRes" className="nav-text">หมวดหมู่ร้านอาหาร</Link>
      </div>
      <div className="nav-right-header">
        <Link to="/" className="a-right">
          {user ? user.username : ""}
        </Link>
        <Link to="/Contract" className="a-right-header">
          ติดต่อเรา
        </Link>
        {user ? (
          <Link to="/Login" className="a-right-header" onClick={clearToken}>
            ออกสู่ระบบ
          </Link>
        ) : (
          <Link to="/Login" className="a-right-header">
            เข้าสู่ระบบ
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
