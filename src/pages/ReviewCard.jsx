import "../assets/css/ReviewCard.css";
// import { restaurantMock } from "../mockdata/restaurantMock";
import ReviewCardModel from "../components/reviewres/ReviewCardModel";
import checkbox from "../assets/images/checkbox-icon.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
function ReviewCard() {
  const [restaurantImage, setRestaurantImage] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantDetail, setRestaurantDetail] = useState("");
  const [avgStarRate, setAvgStarRate] = useState("");
  const [dataReview, setDataReview] = useState([]);
  const [openTime1,setOpenTime1]= useState("");
  const [openTime2,setOpenTime2]= useState("");
  const [openDay,setOpenDay]= useState("");
  const[priceRange,setPriceRange]= useState("");
  const [resLo,setResLo]= useState("");
  useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search);
    let resId = searchParams.get("resId");
    axios.get("http://localhost:8000/restaurant/" + resId).then((res) => {
      // console.log(res.data);
      // console.log(res.data.avgstarrate);
      // console.log(res.data.resteraunt);
      console.log(res.data.review);
      setRestaurantImage(res.data.resteraunt.restaurantImage);
      setRestaurantName(res.data.resteraunt.restaurantName);
      setRestaurantDetail(res.data.resteraunt.otherDetail);
      setOpenTime1(res.data.resteraunt.openingTime1)
      setOpenTime2(res.data.resteraunt.openingTime2)
      setOpenDay(res.data.resteraunt.openDay)
      setAvgStarRate(res.data.avgstarrate);
      setDataReview(res.data.review); //async มันทำเลยไม่รอบบรรทัด27
      setPriceRange(res.data.resteraunt.priceRange)
      setResLo(res.data.resteraunt.restaurantLocation)
      // console.log(dataReview);
      // console.log(dataReview.map((item) => item.starRating));
    });
  }, []);
  return (
    <>
      <div class="food-background" id="food-background">
        <img src={restaurantImage} alt="" class="food-background" />
        <h3 id="restaurant-name">{restaurantName}</h3>
        <p id="restaurant-detail">{restaurantDetail}</p>
        <div class="review-point-bac">
          <div class="review-point" id="review-point">
            {avgStarRate}
          </div>
          <div class="star">★</div>
          <div class="num-review" id="num-review">
            (5 รีวิว)
          </div>
        </div>
        <div class="write-review-bac">
          <div class="write-review">
            <Link to="/ReviewWrite" class="write-review">
              เขียนรีวิว
            </Link>
          </div>
        </div>
      </div>
      <div class="reviewcard-background">
        <div class="bac-mid">
          <div class="bac-left">
            {dataReview.map((o) => (
              <ReviewCardModel
                user={o.name}
                date={o.date}
                reviewTitle={o.reviewTitle}
                starRating={o.starRating}
                reviewImage={o.reviewImage}
                reviewDetail={o.reviewDetail}
              />
            ))}
          </div>
          <div class="bac-right">
            <div class="bac-right-1">
              <div style={{ fontweight: "bold" }}>เวลาเปิดร้าน :</div>
              <span>{openTime1}-{openTime2}</span>
              <span>{openDay}</span>
            </div>
            <div class="bac-right-2">
              <div style={{ fontweight: "bold" }}>ช่วงราคา :</div>
              <span>{priceRange}</span>
              <span>บาท</span>
            </div>
            <div class="bac-right-3">
              <div style={{ fontweight: "bold" }}>พิกัดร้าน :</div>
              <span>
                {resLo}
              </span>
            </div>
            <div class="bac-right-4">
              <div class="car-park">
                <img src={checkbox} alt="" style={{ width: "45px" }} />
                <span>ที่จอดรถ</span>
              </div>
              <div class="wifi">
                <img src={checkbox} alt="" style={{ width: "45px" }} />
                <span>Wi-Fi</span>
              </div>
              <div class="credit">
                <img src={checkbox} alt="" style={{ width: "45px" }} />
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
