import "../assets/css/Register.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
function Register() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  function validate() {
    /// email ห้ามซ้ำ
    if (formData.password !== formData.confirmPassword) {
      setError({ confirmPassword: "INVALID PASSWORD" });
    } else {
      setError({});
    }
  }

  function Submit() {
    validate();
    if (Object.keys(error).length === 0) {
      axios
        .post("http://localhost:8000/user/register", formData)
        .then(() => {
          history.push("/Login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(Object.keys(error).length);
  }
  return (
    <>
      <div class="reg-background">
        <div class="reg-whitebg-register">
          <div class="blue-bac">
            <p>สมัครสมาชิก</p>
          </div>
          <div class="name">
            <p>ชื่อจริง</p>
            <input
              type="text"
              class="register-input"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div class="name">
            <p>นามสกุล</p>
            <input
              type="text"
              class="register-input"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
          <div class="name">
            <p>อีเมลล์</p>
            <input
              type="text"
              class="register-input"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div class="name">
            <p>พาสเวิร์ด</p>
            <input
              type="text"
              class="register-input"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div class="name">
            <p>ยืนยันพาสเวิร์ด</p>
            {error.confirmPassword && <h1 style={{color:'red'}}>{error.confirmPassword}</h1>}
            <input
              type="text"
              class="register-input"
              value={formData.confirmPassword}
              onChange={(e) => {
                setFormData({ ...formData, confirmPassword: e.target.value });
              }}
              F
            />
          </div>
          <div class="sumbit">
            <button onClick={Submit}>สมัครสมาชิก</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
