import "../assets/css/ReviewCard.css";
import { restaurantMock } from "../mockdata/restaurantMock";
import checkbox from "../assets/images/checkbox-icon.jpg";
function ReviewCard() {
  return (
    <>
      <div class="food-background" id="food-background">
        <img
          src={restaurantMock[0].restaurantImage}
          alt=""
          class="food-background"
        />
        <h3 id="restaurant-name">{restaurantMock[0].restaurantName}</h3>
        <p id="restaurant-detail">{restaurantMock[0].restaurantDetail}</p>
        <div class="review-point-bac">
          <div class="review-point" id="review-point">
            {restaurantMock[0].restaurantRating}
          </div>
          <div class="star">★</div>
          <div class="num-review" id="num-review">
            (5 รีวิว)
          </div>
        </div>
        <div class="write-review-bac">
          <div class="write-review">
            <a href="review-write.html" class="write-review">
              เขียนรีวิว
            </a>
          </div>
        </div>
      </div>
      <div class="reviewcard-background">
        <div class="bac-mid">
          <div class="bac-left">
            <div class="bac-left-card">
              <div class="name-date">
                <span class="name">PANNAWAT ANANCHAI.</span>
                <span class="date">11/7/2021</span>
              </div>
              <div class="heading-review">
                <span class="heading">หัวเรื่องรีวิว</span>
                <span class="headung-reivew-star">ดาว</span>
              </div>
              {/* <img
                src={restaurantMock[0].restaurantImage}
                alt=""
                class="center"
              /> */}

              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                  <div class="item active">
                    <img src={restaurantMock[0].restaurantImage} alt="Los Angeles" class="center"/>
                  </div>

                  <div class="item">
                    <img src={restaurantMock[0].restaurantImage} alt="Chicago"class="center" />
                  </div>

                  <div class="item">
                    <img src={restaurantMock[0].restaurantImage} alt="New York" class="center"/>
                  </div>
                </div>

                <a
                  class="left carousel-control"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <span class="glyphicon glyphicon-chevron-left"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="right carousel-control"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <span class="glyphicon glyphicon-chevron-right"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>

              <span class="detail">รายละเอียดรีวิว</span>
              <div class="content">
                <p class="p-content">
                  อาหารร้านนี้อร่อยมากดิชั้นคอนเฟริมจ้าาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาา
                  อิอิ
                </p>
              </div>
            </div>
          </div>
          <div class="bac-right">
            <div class="bac-right-1">
              <div style={{ fontweight: "bold" }}>เวลาเปิดร้าน :</div>
              <span>11.00-21.00</span>
              <span>ทุกวัน</span>
            </div>
            <div class="bac-right-2">
              <div style={{ fontweight: "bold" }}>ช่วงราคา :</div>
              <span>100-250</span>
              <span>บาท</span>
            </div>
            <div class="bac-right-3">
              <div style={{ fontweight: "bold" }}>พิกัดร้าน :</div>
              <span>
                มหาวิทยาลัยธรรมศาสตร์รังสิต ถนน พิราบขาว ตำบล หลักหก
                อำเภอเมืองปทุมธานี ปทุมธานี 12000
              </span>
            </div>
            <div class="bac-right-4">
              <div class="car-park">
                <img
                  src={checkbox}
                  alt=""
                  style={{ width: "45px" }}
                />
                <span>ที่จอดรถ</span>
              </div>
              <div class="wifi">
                <img
                  src={checkbox}
                  alt=""
                  style={{ width: "45px" }}
                />
                <span>Wi-Fi</span>
              </div>
              <div class="credit">
                <img
                  src={checkbox}
                  alt=""
                  style={{ width: "45px" }}
                />
                <span>บัตรเครดิต</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ReviewCard;
