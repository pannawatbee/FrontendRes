import React, { useEffect } from "react";
import "../assets/css/ReviewRes.css";
// import { restaurantMock } from "../mockdata/restaurantMock";
import Card from "../components/reviewres/Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import axios from "axios";
function ReviewRes() {
  const { user } = useContext(AuthContext);
  function checkUser() {
    if (user) {
      if (user.userType === "admin") {
        return (
          <Link to='AdminAddRes'>
            <p>เพิ่มร้านอาหาร</p>
          </Link>
        );
        
      } else return null;
    }
  }
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
          {checkUser()}
          <Link to="#">
            <p
              class= {`${user.userType==="admin"?"wh-ba-right-ptag":"wh-ba-right-ptag2"}`}
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
