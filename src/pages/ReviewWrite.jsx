import "../assets/css/ReviewWrite.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { useHistory } from "react-router";
function ReviewWrite() {
  const history = useHistory();
  // const [imgBlob , setImgBlob] = useState([])
  const { user } = useContext(AuthContext);
  console.log(user);
  const [restaurantName, setRestaurantName] = useState("");
  const [formData, setFormData] = useState({
    reviewName: "",
    detailName: "",
    starRating: "",
    imgBlob: null,
  });
  useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search);
    let resId = searchParams.get("resId");
    axios.get("http://localhost:8000/restaurant/" + resId).then((res) => {
      setRestaurantName(res.data.resteraunt.restaurantName);
    });
  }, []);

  const updateList = function () {
    var input = document.getElementById("fileUploader");
    var output = document.getElementById("divFiles");
    var HTML = "";
    for (var i = 0; i < input.files.length; ++i) {
      console.log(input.files.item(i));
      let data = URL.createObjectURL(input.files.item(i));
      HTML += `<img class="img-restaurant" src="${data}" alt=""></img>`;
    }
    setFormData({ ...formData, imgBlob: input.files.item(0) });
    output.innerHTML = HTML;
  };
  const cancelReview = function () {
    var output = document.getElementById("divFiles");
    output.innerHTML = "";
  };

  // const urlToBase64 = (url, callback) => {
  //   var xhr = new XMLHttpRequest();
  //   xhr.onload = function() {
  //     var reader = new FileReader();
  //     reader.onloadend = function() {
  //       callback(reader.result);
  //     }
  //     reader.readAsDataURL(xhr.response);
  //   };
  //   xhr.open('GET', url);
  //   xhr.responseType = 'blob';
  //   xhr.send();
  // }

  const writeReview = function () {
    let searchParams = new URLSearchParams(window.location.search);
    let resId = searchParams.get("resId");
    console.log(formData);
    const formform = new FormData();
    formform.append("reviewTitle", formData.reviewName);
    formform.append("reviewDetail", formData.detailName);
    formform.append("starRating", formData.starRating);
    formform.append("cloudinput", formData.imgBlob);
    formform.append("ResterauntId", resId);
    formform.append("UserId", user.id);

    axios
      .post("http://localhost:8000/create-store", formform)
      .then((res) => {
        // setShowImage(res.data.user.password)
        history.push("/ReviewCard?resId="+resId);
      })
      .catch((err) => {
        console.dir(err);
      });
      
  };

  const onHandleStarRating = (value) => {
    setFormData({ ...formData, starRating: value });
  };
  return (
    <>
      <div class="review-write-background">
        <div class="review-write-container">
          <div class="review-write-white-background">
            <div class="review-write-wh-ba-left">
              <p>เขียนรีวิว</p>
            </div>
          </div>
          <div class="label-give-point">
            <div class="point-name">{restaurantName}</div>
            <div class="stars">
              <input
                type="radio"
                id="one"
                name="rate"
                value="5"
                class="reviewwrite-input"
              />
              <label for="one" onClick={() => onHandleStarRating(5)}></label>
              <input
                type="radio"
                id="two"
                name="rate"
                value="4"
                class="reviewwrite-input"
              />
              <label for="two" onClick={() => onHandleStarRating(4)}></label>
              <input
                type="radio"
                id="three"
                name="rate"
                value="3"
                class="reviewwrite-input"
              />
              <label for="three" onClick={() => onHandleStarRating(3)}></label>
              <input
                type="radio"
                id="four"
                name="rate"
                value="2"
                class="reviewwrite-input"
              />
              <label for="four" onClick={() => onHandleStarRating(2)}></label>
              <input
                type="radio"
                id="five"
                name="rate"
                value="1"
                class="reviewwrite-input"
              />
              <label for="five" onClick={() => onHandleStarRating(1)}></label>
              <span class="result"></span>
            </div>
          </div>
          <div class="form-bac">
            <form action="/action_page.php">
              <label for="fname" class="label-header">
                หัวเรื่องรีวิว
              </label>
              <br />
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.reviewName}
                class="input"
                onChange={(e) =>
                  setFormData({ ...formData, reviewName: e.target.value })
                }
              />
              <br />
              <label for="review" class="label-header">
                รายละเอียดรีวิว
              </label>
              <br />
              <textarea
                id="detail-review"
                name="w3review"
                rows="4"
                cols="50"
                value={formData.detailName}
                onChange={(e) =>
                  setFormData({ ...formData, detailName: e.target.value })
                }
              ></textarea>
            </form>
            <div id="divFiles" class="content-img"></div>
            <div class="button-upload">
              <button>
                <label for="fileUploader" class="btn">
                  อัพโหลดรูป
                </label>
              </button>

              <input
                class="uploadimage"
                style={{ visibility: "hidden" }}
                id="fileUploader"
                name="fileUploader"
                type="file"
                multiple="multiple"
                onChange={updateList}
              />
            </div>
            <div class="button-review-cancel">
              <button onClick={writeReview}>บันทึกรีวิว</button>
              <button onClick={cancelReview}>ยกเลิก</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ReviewWrite;
