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

  function validate() {
    if (formData.password !== formData.confirmPassword) {
      return validate2()
    }
  }
  function validate2(){
    return <h1 style={{color:'red'}}>Invalid password</h1>;
  }
 
  function Submit() {
    const res = axios.post("http://localhost:8002/user", formData);
    history.push("/Login");
    console.log(res);
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
            <p>ยืนยันพาสเวิร์ด</p>{()=>validate2}
            <input
              type="text"
              class="register-input"
              value={formData.confirmPassword}
              onChange={(e) => {
                setFormData({ ...formData, confirmPassword: e.target.value });
                validate();
              }}
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
