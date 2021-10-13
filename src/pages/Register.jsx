import "../assets/css/Register.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
// import validator from 'validator';
import isEmail from "validator/lib/isEmail";
function Register() {
  // console.log(validator.isEmail('foo@bar.com'))
  // console.log(isEmail("foo@bar.com"));
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  function validate(e) {
    /// email ห้ามซ้ำ

    if (e.target.value !== formData.password) {
      setError({ confirmPassword: "INVALID PASSWORD" });
    } else {
      setError({});
    }
  }
  function validateName(e) {
    if (e.target.value === "") {
      if (e.target.name === "name") {
        setError({ name: "INVALID FIRSTNAME" });
      }
      if (e.target.name === "lastname") {
        setError({ lastname: "INVALID LASTNAME" });
      }
    } else {
      setError({});
    }
  }
  function validateEmail(e) {
    if (!isEmail(e.target.value)) {
      setError({ email: "INVALID EMAIL" });
    } else {
      setError({});
    }
  }
  function Submit() {
    // validate();
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
    else setError({ confirmPassword: "INVALID PASSWORD" });
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
            {error.name && (
              <h1 style={{ color: "red", margin: 0 }}>{error.name}</h1>
            )}
            <input
              type="text"
              name="name"
              class="register-input"
              value={formData.firstName}
              onChange={(e) => {
                validateName(e);
                setFormData({ ...formData, firstName: e.target.value });
              }}
            />
          </div>
          <div class="name">
            <p>นามสกุล</p>
            {error.lastname && (
              <h1 style={{ color: "red", margin: 0 }}>{error.lastname}</h1>
            )}
            <input
              type="text"
              class="register-input"
              name="lastname"
              value={formData.lastName}
              onChange={(e) => {
                validateName(e);
                setFormData({ ...formData, lastName: e.target.value });
              }}
            />
          </div>
          <div class="name">
            <p>อีเมลล์</p>
            {error.email && (
              <h1 style={{ color: "red", margin: 0 }}>{error.email}</h1>
            )}
            <input
              type="text"
              class="register-input"
              value={formData.email}
              name="email"
              onChange={(e) => {
                validateEmail(e);
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>
          <div class="name">
            <p>พาสเวิร์ด</p>
            <input
              type="password"
              class="register-input"
              value={formData.password}
              onChange={(e) => {
                // validate(e);
                setFormData({ ...formData, password: e.target.value });
              }}
            />
          </div>
          <div class="name">
            <p>ยืนยันพาสเวิร์ด</p>
            {error.confirmPassword && (
              <h1 style={{ color: "red" }}>{error.confirmPassword}</h1>
            )}
            <input
              type="password"
              class="register-input"
              value={formData.confirmPassword}
              onChange={(e) => {
                validate(e);
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
