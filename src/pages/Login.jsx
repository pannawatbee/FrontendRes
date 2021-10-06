import "../assets/css/Login.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function Submit() {
    const res = axios.post("http://localhost:8002/user", formData);
    console.log(res);
  }
  return (
    <div class="login">
      <div class="login-background">
        <div class="login-whitebg-login">
          <p class="email">อีเมลล์</p>
          <input type="text" class="input-login" value={formData.email} onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }/>
          <p class="login-password">พาสเวิร์ด</p>
          <input type="text" class="input-login" value={formData.password} onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }/>
          <div class="login-register">
            <button type="login-button" class="login-button">
              เข้าสู่ระบบ
            </button>
            <button class="register" onClick={Submit}>
              <Link to="/Register" class="reg-text">
                สมัครสมาชิก
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
