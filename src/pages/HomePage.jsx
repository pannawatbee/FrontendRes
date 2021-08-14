import React from 'react'
import {Link} from "react-router-dom"
import './HomePage.css'
import Carousel from 'react-bootstrap/Carousel'
import CarouselCaption   from 'react-bootstrap/CarouselCaption';
import CarouselItem from 'react-bootstrap/CarouselItem';
// import Carousel.Item from 'react-bootstrap/Carousel.Item'
function HomePage() {
    return (
        <>
          <div className="navigator">
      <div class="nav-left">
        <a href="home.html">หน้าแรก</a>
        <a href="review-res.html">รีวิวร้านอาหาร</a>
        <a href="category-res.html">หมวดหมู่ร้านอาหาร</a>
      </div>
      <div class="nav-right">
        <a href="#" class="a-right">PANNAWAT ANANCHAITAM</a>
        <a href="contract.html" class="a-right">ติดต่อเรา</a>
        <a href="login.html" class="a-right">เข้าสู่ระบบ</a>
      </div>
    </div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/200/300"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/200/300"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/200/300"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default HomePage
