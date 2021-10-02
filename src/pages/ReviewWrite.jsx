import "../assets/css/ReviewWrite.css";
import{useState} from'react'
function ReviewWrite() {
      const[text,setText]=useState('')
      const[text2,setText2]=useState('')
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
              <input type="radio" id="one" name="rate" value="1" />
              <label for="one"></label>
              <input type="radio" id="two" name="rate" value="2" />
              <label for="two"></label>
              <input type="radio" id="three" name="rate" value="3" />
              <label for="three"></label>
              <input type="radio" id="four" name="rate" value="4" />
              <label for="four"></label>
              <input type="radio" id="five" name="rate" value="5" />
              <label for="five"></label>
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
                value={text}
                class="input"
                onChange={e=>setText(e.target.value)}
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
                value={text2}
                onChange={e=>setText2(e.target.value)}
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
                style={{visibility: "hidden"}}
                id="fileUploader"
                name="fileUploader"
                type="file"
                multiple="multiple"
                onchange="updateList()"
              />
            </div>
            <div class="button-review-cancel">
              <button>บันทึกรีวิว</button>
              <button>ยกเลิก</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ReviewWrite;