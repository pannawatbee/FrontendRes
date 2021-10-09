import React from "react";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import "../assets/css/HomePage.css";
import Hottobun from "../assets/images/Hottobun.jpg";
import Copper from "../assets/images/copper.jpg";
import Starbuck from "../assets/images/starbuck.jpg";
import { restaurantMock } from "../mockdata/restaurantMock";
import CarouselCard from "../components/home/CarouselCard";
import axios from "axios";
import {useState} from "react";
function HomePage() {
  const [res, setRes] = useState([])
  useEffect(() => {
    const  firstredender = async()=>{
    const res = await axios.get("http://localhost:8002/restaurant");
    console.log(res);
    console.log(res.data.resteraunt[0].restaurantImage);
    setRes(res.data.resteraunt)
    }
    firstredender()
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
          <div className="item active">
            <CarouselCard
              name="Hottobun"
              img={Hottobun}
              detail={restaurantMock[0].restaurantDetail}
            />
          </div>
          <div className="item">
            <CarouselCard
              name="Copper"
              img={Copper}
              detail={restaurantMock[1].restaurantDetail}
            />
          </div>
          <div className="item">
            <CarouselCard
              name="Starbuck"
              img={Starbuck}
              detail={restaurantMock[2].restaurantDetail}
            />
          </div>
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
