import buffet from "../assets/images/Buffet.png";
import cafe from "../assets/images/Cafe.png";
import res from "../assets/images/Restaurant.png";
import "../assets/css/CategoryRes.css";
// import { restaurantMock } from "../mockdata/restaurantMock";
import Card from "../components/reviewres/Card";
import { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
function CategoryRes() {
  const [resteraunt, setResteraunt] = useState([]);
  const [sliceres, setSliceRes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/restaurant").then((res) => {
      console.log(res.data.resteraunt);
      setResteraunt(res.data.resteraunt);
      setSliceRes(res.data.resteraunt);
    });
  }, []);

  // const [res2, setRes2] = useState(restaurantMock);
  //  var  res2 =restaurantMock.filter(item=>item.catagory==='res')
  // function  func1(){
  //   var res2 = restaurantMock.filter(item=>item.catagory='res')
  // }
  const func1 = () => {
    let filter1 = resteraunt.filter(
      (item) => item.restaurantCategory === "res"
    );
    // console.log(filter1)
    setSliceRes(filter1);
  };
  const func2 = () => {
    let filter2 = resteraunt.filter(
      (item) => item.restaurantCategory === "cafe"
    );
    // console.log(filter2)
    setSliceRes(filter2);
  };
  const func3 = () => {
    let filter3 = resteraunt.filter(
      (item) => item.restaurantCategory === "buffet"
    );
    setSliceRes(filter3);
  };
  const func4 = () => {
    setSliceRes(resteraunt);
  };
  return (
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
        {sliceres.map((o) => (
          <Card
            name={o.restaurantName}
            img={o.restaurantImage}
            url={"ReviewCard?resId=" + o.id}
          />
        ))}
      </div>
    </div>
  );
}
export default CategoryRes;
