import React from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import "../assets/css/HomePage.css";
// import Hottobun from "../assets/images/Hottobun.jpg";
// import Copper from "../assets/images/copper.jpg";
// import Starbuck from "../assets/images/starbuck.jpg";
// import { restaurantMock } from "../mockdata/restaurantMock";
import CarouselCard from "../components/home/CarouselCard";
import axios from "axios";
import {useState} from "react";
function HomePage() {
  const [res, setRes] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/restaurant/home").then((res) => {
      console.log(res.data.resteraunt);
      setRes(res.data.resteraunt);
    });
  }, []);

  return (
    <div className="container">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {
            res.map((o , index) => (
              <div className={`item ${index === 0 ? ' active' : ''}`}>
                <CarouselCard
                  name={o.restaurantName}
                  img={o.restaurantImage}
                  detail={o.otherDetail}
                  path={'ReviewCard?resId='+o.id}
                />
              </div>
            ))
          }
        </div>
        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
