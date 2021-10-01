import buffet from "../assets/images/Buffet.png";
import cafe from "../assets/images/Cafe.png";
import res from "../assets/images/Restaurant.png";
import "../assets/css/CategoryRes.css";
import { restaurantMock } from "../mockdata/restaurantMock";
import Card from "../components/reviewres/Card";
function CategoryRes() {
  return (
    <>
      <div class="background-cate">
        <div class="white-background-cate">
          <div class="wh-ba-left-cate">
            <p>หมวดหมู่</p>
          </div>
          <div class="wh-ba-mid-cate">
            <img
              src={res}
              alt=""
             
              class="img-hover1-cate"
            />
            <img src={cafe} alt=""  class="img-hover1-cate" />
            <img
              src={buffet}
              alt=""
              
              class="img-hover1-cate"
            />
          </div>
          <div class="wh-ba-right-cate">
            <a href="#">
              <p class="wh-ba-right-ptag-cate">ล้างฟิลเตอร์</p>
            </a>
          </div>
        </div>
        <div class="card-container-cate">
        {restaurantMock.map(o=>(<Card name={o.restaurantName} img={o.restaurantImage} url={o.restaurantDetailLink}/>))}
          {/* <div class="card1">
            <a href="review-card.html">
              <img src="picture/Hottobun.jpg" alt="" />
              <p>Hottobun</p>
            </a>
          </div>
          <div class="card2">
            <a href="#">
              <img src="picture/copper.png" alt="" />
              <p>Copper Buffet</p>
            </a>
          </div>
          <div class="card3">
            <a href="#">
              <img src="picture/starbuck.jpg" alt="" />
              <p>Starbuck</p>
            </a>
          </div>
          <div class="card4">
            <a href="#">
              <img src="picture/blackcan3.jpg" alt="" />
              <p>Black Canyon</p>
            </a>
          </div>
          <div class="card5">
            <a href="#">
              <img src="picture/sawadee.jpg" alt="" />
              <p>Sawasdee</p>
            </a>
          </div>
          <div class="card6">
            <a href="#">
              <img src="picture/santa fe steak.jpg" alt="" />
              <p>Santa Fe'Steak</p>
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default CategoryRes;
