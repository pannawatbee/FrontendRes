import "../assets/css/ReviewWrite.css";
import { useState } from "react";
function ReviewWrite() {
     // const [imgBlob , setImgBlob] = useState([])
  const [formData , setFormData] = useState({
    reviewName : "",
    detailName : "",
    starRating : "",
    imgBlob : []
  })

  const updateList = function () {
    var input = document.getElementById("fileUploader");
    var output = document.getElementById("divFiles");
    var HTML = "";
    var arrBlob = []
    for (var i = 0; i < input.files.length; ++i) {
      console.log(input.files.item(i));
      let data = URL.createObjectURL(input.files.item(i));
      console.log(data);
      urlToBase64(data , function(dataUrl){
        arrBlob.push(dataUrl)
      })
      HTML += `<img class="img-restaurant" src="${data}" alt=""></img>`;
    }
    setFormData({...formData , 
      imgBlob : arrBlob
    })
    output.innerHTML = HTML;
  };
  const cancelReview = function () {
    var output = document.getElementById("divFiles");
    output.innerHTML = "";
  };

  const urlToBase64 = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  const writeReview = function () {
    //convert img to blob base64
    console.log(formData)
  }; 

  const onHandleStarRating = (value) => {
    setFormData({...formData , 
      starRating : value
    })
  }
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
            <div class="point-name">ให้คะแนนย่างเนยเชียงราก</div>
            <div class="stars">
              <input type="radio" id="one" name="rate" value="5" class='reviewwrite-input' />
              <label for="one" onClick={() => onHandleStarRating(5)}></label>
              <input type="radio" id="two" name="rate" value="4" class='reviewwrite-input' />
              <label for="two" onClick={() => onHandleStarRating(4)}></label>
              <input type="radio" id="three" name="rate" value="3" class='reviewwrite-input' />
              <label for="three" onClick={() => onHandleStarRating(3)}></label>
              <input type="radio" id="four" name="rate" value="2" class='reviewwrite-input' />
              <label for="four" onClick={() => onHandleStarRating(2)}></label>
              <input type="radio" id="five" name="rate" value="1" class='reviewwrite-input' />
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
                onChange={(e) => setFormData({...formData , 
                  reviewName : e.target.value
                })}
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
                onChange={(e) => setFormData({...formData , 
                  detailName : e.target.value
                })}
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
              <button  onClick={cancelReview}>ยกเลิก</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ReviewWrite;
