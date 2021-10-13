import "../assets/css/Login.css";
import { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { setToken } from "../services/localStorage";
import { useHistory } from "react-router";
import { AuthContext } from "../contexts/authContext";
import jwtDecode from "jwt-decode";
// import jwtDecode from "jwt-decode";
function Login() {
  const history = useHistory();
  const { setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const Submit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:8000/user/login", {
        formData,
      }); //หลังบ้านส่งมา res.json({ message: "success logged in", token });
      console.log(res);
      setToken(res.data.token); // เอา key ที่ data ที่มี key token ออกมา
      console.log(jwtDecode(res.data.token));
      setUser(jwtDecode(res.data.token)); // ทำเพื่อ decode token ได้ payload ออกมา
      history.push("/");
    } catch (err) {
      console.dir(err);
      console.log(err.response.data.message);
      setError({ invalidEmail: err.response.data.message });
      setError({invalidPassword:err.response.data.message})
      // console.log(err);
    }
  };
  return (
    <div class="login">
      <div class="login-background">
        <div class="login-whitebg-login">
          <p class="email">อีเมลล์ {error.invalidEmail && (
            <h1 style={{ color: "red", margin: 0 }}>{error.invalidEmail}</h1>
          )}</p>
         
          <input
            type="text"
            class="input-login"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <p class="login-password">พาสเวิร์ด{error.invalidPassword && (
            <h1 style={{ color: "red", margin: 0 }}>{error.invalidPassword}</h1>
          )}</p>
          <input
            type="text"
            class="input-login"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <div class="login-register">
            <button type="login-button" class="login-button" onClick={Submit}>
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
