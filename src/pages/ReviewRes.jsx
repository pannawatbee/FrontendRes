import React from "react";
import "../assets/css/ReviewRes.css";
import { restaurantMock } from "../mockdata/restaurantMock";
import Card from "../components/reviewres/Card";
import {useState} from 'react'
import { Link } from "react-router-dom";
function ReviewRes() {
    const[count,setCount]=useState(6);
    let restaurantMock2 =restaurantMock.slice(0, count)
   
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
            <p class="wh-ba-right-ptag" onClick={()=>setCount(restaurantMock.length)}>ดูทั้งหมด</p>
            </Link>
        </div>
      </div>
      <div id="card-container" class="card-container">
        {restaurantMock2.map(o=>(<Card name={o.restaurantName} img={o.restaurantImage} url={o.restaurantDetailLink}/>))}
      </div>
    </div>
  );
}
export default ReviewRes;
