import "../assets/css/Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div class="login">
      <div class="login-background">
        <div class="login-whitebg-login">
          <p class="email">อีเมลล์</p>
          <input type="text" class="input-login" />
          <p class="login-password">พาสเวิร์ด</p>
          <input type="text" class="input-login"/>
          <div class="login-register">
            <button type="login-button" class="login-button">
              เข้าสู่ระบบ
            </button>
            <button class="register">
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
