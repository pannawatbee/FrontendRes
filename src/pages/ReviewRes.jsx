import React, { useEffect } from "react";
import "../assets/css/ReviewRes.css";
// import { restaurantMock } from "../mockdata/restaurantMock";
import Card from "../components/reviewres/Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function ReviewRes() {
  const [count, setCount] = useState(6);
  const [resteraunt, setResteraunt] = useState([]);
  let restaurantSlice = resteraunt.slice(0, count);
  useEffect(() => {
    axios.get("http://localhost:8000/restaurant").then((res) => {
      console.log(res.data.resteraunt);
      setResteraunt(res.data.resteraunt);
    });
  }, []);
  function handleRestaurantList(){
    if(count>6) {setCount(6)}
    else setCount(resteraunt.length)
  }
  return (
    <div class="background">
      <div class="white-background">
        <div class="wh-ba-left">
          <p>รีวิวร้านอาหาร</p>
        </div>
        <div class="wh-ba-right">
          <a href="user-add-res.html">
            <p>เพิ่มร้านอาหาร</p>
          </a>
          <Link to="#">
            <p
              class="wh-ba-right-ptag"
              onClick={handleRestaurantList}
            >
              ดูทั้งหมด
            </p>
          </Link>
        </div>
      </div>
      <div id="card-container" class="card-container">
        {restaurantSlice.map((o) => (
          <Card
            name={o.restaurantName}
            img={o.restaurantImage}
            url={'ReviewCard?resId='+o.id}
          />
        ))}
      </div>
    </div>
  );
}
export default ReviewRes;
