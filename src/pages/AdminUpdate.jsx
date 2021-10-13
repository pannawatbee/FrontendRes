// import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { useHistory } from "react-router";
import "../assets/css/AdminUpdate.css";
function AdminUpdate() {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  // const [formData, setFormData] = useState({
  //   restaurantName: "",
  //   carPark: false,
  //   wifi: false,
  //   creditCard: false,
  //   openTime1: "",
  //   openTime2: "",
  //   openDay: "",
  //   priceRange: "",
  //   category: "",
  //   restaurantLocation: "",
  //   restaurantDetail: "",
  //   imgBlob: [],
  //   img: "",
  // });
  const [restaurantName, setRestaurantName] = useState("");
  const [carPark, setCarPark] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [creditCard, setCreditCard] = useState(false);
  const [openTime1, setOpenTime1] = useState("");
  const [openTime2, setOpenTime2] = useState("");
  const [openDay, setOpenDay] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [category, setCategory] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");
  const [restaurantDetail, setRestaurantDetail] = useState("");
  const [imgBlob, setImgBlob] = useState([]);
  // const [img, setImg] = useState("");

  useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search);
    let resId = searchParams.get("resId");
    axios.get("http://localhost:8000/restaurant/" + resId).then((res) => {
      setImage(res.data.resteraunt.restaurantImage);
      setCarPark(res.data.resteraunt.carpark);
      setWifi(res.data.resteraunt.wifi);
      setCreditCard(res.data.resteraunt.creditCard);
      setRestaurantName(res.data.resteraunt.restaurantName);
      setOpenTime1(res.data.resteraunt.openingTime1);
      setOpenTime2(res.data.resteraunt.openingTime2);
      setOpenDay(res.data.resteraunt.openDay);
      setPriceRange(res.data.resteraunt.priceRange);
      setCategory(res.data.resteraunt.restaurantCategory);
      setRestaurantLocation(res.data.resteraunt.restaurantLocation);
      setRestaurantDetail(res.data.resteraunt.otherDetail);
      setImgBlob(res.data.resteraunt.restaurantImage)
    });
  }, []);

  function setImage(props) {
    var output = document.getElementById("divFiles");
    var HTML = "";

    HTML += `<img class="img-restaurant" src="${props}" alt=""></img>`;
    output.innerHTML = HTML;
  }

  const updateList = function () {
    var input = document.getElementById("fileUploader");
    var output = document.getElementById("divFiles");
    var HTML = "";
    for (var i = 0; i < input.files.length; ++i) {
      console.log(input.files.item(i));
      let data = URL.createObjectURL(input.files.item(i));
      console.log(data);
      HTML += `<img class="img-restaurant" src="${data}" alt=""></img>`;
    }
    // setFormData({ ...formData, imgBlob: input.files.item(0) });
    setImgBlob(input.files.item(0)); //ส่งไปหลังบ้าน

    output.innerHTML = HTML;
  };
  function handleChangeCategory(e) {
    console.log(e.target.value);
    console.log(e);
    setCategory(e.target.value)
  }
  // const urlToBase64 = (url, callback) => {
  //   var xhr = new XMLHttpRequest();
  //   xhr.onload = function () {
  //     var reader = new FileReader();
  //     reader.onloadend = function () {
  //       callback(reader.result);
  //     };
  //     reader.readAsDataURL(xhr.response);
  //   };
  //   xhr.open("GET", url);
  //   xhr.responseType = "blob";
  //   xhr.send();
  // };
  // console.log(formData.carPark);
  const writeReview = function () {
    let searchParams = new URLSearchParams(window.location.search);
    let resId = searchParams.get("resId");
    // console.log(formData);
    const formform = new FormData();
    formform.append("restaurantName", restaurantName);
    formform.append("carpark", carPark);
    formform.append("wifi", wifi);
    formform.append("creditCard", creditCard);
    formform.append("openingTime1", openTime1);
    formform.append("openingTime2", openTime2);
    formform.append("openDay", openDay);
    formform.append("priceRange", priceRange);
    formform.append("restaurantCategory", category);
    formform.append("restaurantLocation", restaurantLocation);
    formform.append("otherDetail", restaurantDetail);
    formform.append("createType", user.userType);
    formform.append("UserId", user.id);
    formform.append("cloudinput", imgBlob);

    axios
      .put("http://localhost:8000/create-store/" + resId, formform)
      .then((res) => {
        // console.log(555);

        // console.log(res);
        history.push("/ReviewCard?resId=" + resId);
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  const cancelReview = function () {
    let searchParams = new URLSearchParams(window.location.search);
    let resId = searchParams.get("resId");
    var output = document.getElementById("divFiles");
    output.innerHTML = "";
    history.push("/ReviewCard?resId=" + resId);
  };

  return (
    <div class="background-adminupdate">
      <div class="white-background-adminupdate2">
        <div class="wh-ba-left-adminupdate2">
          <p>จัดการ</p>
        </div>
        <div class="wh-ba-right-adminupdate2">
          <a href="admin-update1.html" class="up-res">
            <p class="wh-ba-right-ptag-adminupdate">อัพเดทร้านอาหาร</p>
          </a>
        </div>
      </div>

      <div class="content-bc">
        <div class="content-bc-1">
          <p>ชื่อร้านอาหาร</p>
          <input
            type="text"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
          />
        </div>
        <div class="content-bc-2">
          <div class="content-bc-2-1">
            <p>รายละเอียดร้าน</p>
            <div class="content-bc-2-1-detial">
              <div class="content-bc-2-1-detial-row">
                <input
                  type="checkbox"
                  id="carpark"
                  name="carpark"
                  checked={carPark}
                  onClick={(e) =>
                    // setFormData({ ...formData, carPark: e.target.checked })
                    setCarPark(e.target.checked)
                  }
                />
                <label for="carpark" class="adminupdate-text">
                  ที่จอดรถ
                </label>
                <br />
              </div>
              <div class="content-bc-2-1-detial-row">
                <input
                  type="checkbox"
                  id="wifi"
                  name="wifi"
                  checked={wifi}
                  onClick={(e) => setWifi(e.target.checked)}
                />
                <label for="wifi" class="adminupdate-text">
                  Wi-Fi
                </label>
                <br />
              </div>
              <div class="content-bc-2-1-detial-row">
                <input
                  type="checkbox"
                  id="creditcard"
                  name="creditcard"
                  checked={creditCard}
                  onClick={(e) => setCreditCard(e.target.checked)}
                />
                <label for="creditcard" class="adminupdate-text">
                  บัตรเครดิต
                </label>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div class="content-bc-2-2">
            <p class="open-close">เวลาเปิด-ปิด</p>
            <div class="open-close-range">
              <input
                type="text"
                class="open-close-range-input"
                value={openTime1}
                onChange={(e) => setOpenTime1(e.target.value)}
              />
              <span class="open-close-range-span">-</span>
              <input
                type="text"
                class="open-close-range-input"
                value={openTime2}
                onChange={(e) => setOpenTime2(e.target.value)}
              />
            </div>
            <p class="openday">เปิดวัน</p>
            <input
              type="text"
              class="openday-input"
              value={openDay}
              onChange={(e) => setOpenDay(e.target.value)}
            />
          </div>
          <div class="content-bc-2-3">
            <div>
              <p class="cost-range">ช่วงราคา</p>
              <input
                type="text"
                class="cost-range-input"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              />
            </div>

            {/* <p class="category">หมวดหมู่</p>
              <input type="text" class="category-input" /> */}
            <div>
              {/* <p class="category">หมวดหมู่</p> */}
              {/* <input type="text" class="category-input" /> */}
              <label for="category" class="category-label">
                หมวดหมู่:
              </label>
              <select
                id="category"
                class="category-option"
                value={category}
                onChange={handleChangeCategory}
              >
                <option value="res">Restaurant</option>
                <option value="cafe">Cafe</option>
                <option value="buffet">Buffet</option>
              </select>
            </div>
          </div>
          <div class="content-bc-4">
            <p class="store-location">พิกัดร้าน</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="store-location-detial"
              value={restaurantLocation}
              onChange={(e) => setRestaurantLocation(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div class="content-bc-3">
          <p class="more-detail">รายละเอียดเพิ่มเติม</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="more-detail-area"
            value={restaurantDetail}
            onChange={(e) => setRestaurantDetail(e.target.value)}
          ></textarea>
        </div>

        <div class="upload-image">
          <div id="divFiles" class="content-img"></div>
          <div class="button-upload">
            <button>
              <label for="fileUploader" class="btn">
                อัพโหลดรูป
              </label>
            </button>

            <input
              class="uploadimage"
              style={{ visibility: "hidden", display: "block" }}
              id="fileUploader"
              name="fileUploader"
              type="file"
              multiple="multiple"
              onChange={updateList}
              // value={imgBlob}
            />
          </div>
          <div class="button-review-cancel-adminupdate">
            <button class="sumbit-res-adminupdate" onClick={writeReview}>
              บันทึกร้านอาหาร
            </button>
            <button class="cancel-res-adminupdate" onClick={cancelReview}>
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminUpdate;
