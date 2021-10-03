import "../assets/css/Register.css";
function Register() {
  return (
    <>
      <div class="reg-background">
        <div class="reg-whitebg-register">
          <div class="blue-bac">
            <p>สมัครสมาชิก</p>
          </div>
          <div class="name">
            <p>ชื่อจริง</p>
            <input type="text" class='register-input'/>
          </div>
          <div class="name">
            <p>นามสกุล</p>
            <input type="text" class='register-input'/>
          </div>
          <div class="name">
            <p>อีเมลล์</p>
            <input type="text" class='register-input'/>
          </div>
          <div class="name">
            <p>พาสเวิร์ด</p>
            <input type="text" class='register-input'/>
          </div>
          <div class="name">
            <p>ยืนยันพาสเวิร์ด</p>
            <input type="text" class='register-input'/>
          </div>
          <div class="sumbit">
            <button>สมัครสมาชิก</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
