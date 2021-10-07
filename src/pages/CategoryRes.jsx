import buffet from "../assets/images/Buffet.png";
import cafe from "../assets/images/Cafe.png";
import res from "../assets/images/Restaurant.png";
import "../assets/css/CategoryRes.css";
import { restaurantMock } from "../mockdata/restaurantMock";
import Card from "../components/reviewres/Card";
import { useState } from "react";
// import { Link } from "react-router-dom";
function CategoryRes() {
  const [res2, setRes2] = useState(restaurantMock);
  //  var  res2 =restaurantMock.filter(item=>item.catagory==='res')
  // function  func1(){
  //   var res2 = restaurantMock.filter(item=>item.catagory='res')
  // }
  const func1 = () => {
    let filter1 = restaurantMock.filter((item) => item.catagory === "res");
    setRes2(filter1);
  };
  const func2 = () => {
    let filter2 = restaurantMock.filter((item) => item.catagory === "cafe");
    setRes2(filter2);
  };
  const func3 = () => {
    let filter3 = restaurantMock.filter((item) => item.catagory === "buffet");
    setRes2(filter3);
  };
  const func4 = () => {
    setRes2(restaurantMock);
  };
  return (
    <>
      <div class="background-cate">
        <div class="white-background-cate">
          <div class="wh-ba-left-cate">
            <p>หมวดหมู่</p>
          </div>
          <div class="wh-ba-mid-cate">
            <img src={res} alt="" class="img-hover1-cate" onClick={func1} />
            <img src={cafe} alt="" class="img-hover1-cate" onClick={func2} />
            <img src={buffet} alt="" class="img-hover1-cate" onClick={func3} />
          </div>
          <div class="wh-ba-right-cate">
            <p class="wh-ba-right-ptag-cate" onClick={func4}>
              ล้างฟิลเตอร์
            </p>
          </div>
        </div>
        <div class="card-container-cate">
          {res2.map((o) => (
            <Card
              name={o.restaurantName}
              img={o.restaurantImage}
              url={o.restaurantDetailLink}
            />
          ))}{" "}
          {/* res2 */}
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
