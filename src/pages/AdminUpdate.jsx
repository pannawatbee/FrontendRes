import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/css/AdminUpdate.css";
function AdminUpdate() {
  const [formData, setFormData] = useState({
    restaurantName: "",
    carPark: "",
    wifi: "",
    creditCard: "",
    openTime1: "",
    openTime2: "",
    openDay: "",
    priceRange: "",
    category: "",
    restaurantLocation: "",
    restaurantDetail: "",
    imgBlob: [],
  });
  const updateList = function () {
    var input = document.getElementById("fileUploader");
    var output = document.getElementById("divFiles");
    var HTML = "";
    var arrBlob = [];
    for (var i = 0; i < input.files.length; ++i) {
      console.log(input.files.item(i));
      let data = URL.createObjectURL(input.files.item(i));
      console.log(data);
      urlToBase64(data, function (dataUrl) {
        arrBlob.push(dataUrl);
      });
      HTML += `<img class="img-restaurant" src="${data}" alt=""></img>`;
    }
    setFormData({ ...formData, imgBlob: arrBlob });
    output.innerHTML = HTML;
  };
  const urlToBase64 = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  };
  const writeReview = function () {
    //convert img to blob base64
    console.log(formData);
  };
  const cancelReview = function () {
    var output = document.getElementById("divFiles");
    output.innerHTML = "";
  };
  //    const test =function(){
  //        console.log('55')
  //    }
  return (
    <div class="background-adminupdate">
      <div class="white-background-adminupdate">
        <div class="wh-ba-left-adminupdate">
          <p>จัดการ</p>
        </div>
        <div class="wh-ba-right-adminupdate">
          <Link href="#" class="add-res">
            <p>เพิ่มร้านอาหาร</p>
          </Link>
          <a href="admin-update1.html" class="up-res">
            <p class="wh-ba-right-ptag-adminupdate">อัพเดทร้านอาหาร</p>
          </a>
          <a href="admin-approve1.html" class="improve-res">
            <p class="wh-ba-right-ptag-adminupdate">อนุมัติร้านอาหาร</p>
          </a>
        </div>
      </div>

      <div class="content-bc">
        <div class="content-bc-1">
          <p>ชื่อร้านอาหาร</p>
          <input
            type="text"
            value={formData.restaurantName}
            onChange={(e) =>
              setFormData({ ...formData, restaurantName: e.target.value })
            }
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
                  value={formData.carPark}
                  onClick={(e) =>
                    setFormData({ ...formData, carPark: e.target.value })
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
                  value={formData.wifi}
                  onClick={(e) =>
                    setFormData({ ...formData, wifi: e.target.value })
                  }
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
                  value={formData.creditCard}
                  onClick={(e) =>
                    setFormData({ ...formData, creditCard: e.target.value })
                  }
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
                value={formData.openTime1}
                onChange={(e) =>
                  setFormData({ ...formData, openTime1: e.target.value })
                }
              />
              <span class="open-close-range-span">-</span>
              <input
                type="text"
                class="open-close-range-input"
                value={formData.openTime2}
                onChange={(e) =>
                  setFormData({ ...formData, openTime2: e.target.value })
                }
              />
            </div>
            <p class="openday">เปิดวัน</p>
            <input
              type="text"
              class="openday-input"
              value={formData.openDay}
              onChange={(e) =>
                setFormData({ ...formData, openDay: e.target.value })
              }
            />
          </div>
          <div class="content-bc-2-3">
            <div>
              <p class="cost-range">ช่วงราคา</p>
              <input
                type="text"
                class="cost-range-input"
                value={formData.priceRange}
                onChange={(e) =>
                  setFormData({ ...formData, priceRange: e.target.value })
                }
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
              <select id="category" class="category-option">
                <option
                  value="Restaurant"
                  onClick={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  Restaurant
                </option>
                <option
                  value="Cafe"
                  onClick={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  Cafe
                </option>
                <option
                  value="Buffet"
                  onClick={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  Buffet
                </option>
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
              value={formData.restaurantLocation}
              onChange={(e) =>
                setFormData({ ...formData, restaurantLocation: e.target.value })
              }
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
            value={formData.restaurantDetail}
            onChange={(e) =>
              setFormData({ ...formData, restaurantDetail: e.target.value })
            }
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
