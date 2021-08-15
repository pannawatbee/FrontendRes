import react , { Component  } from "react";
import "../assets/css/ReviewRes.css";
import { restaurantMock } from "../mockdata/restaurantMock";
import Card from "../components/reviewres/Card";

class ReviewRes extends Component {
  constructor(props) {
    super();
    this.state = {
      restaurantMock2 : []
    };
  }

  componentDidMount(){
    this.restaurantList()
  }

  restaurantList = (isSeeAll = false) => {
    if (isSeeAll) {
      let countContent = restaurantMock.length;
      this.setState({restaurantMock2 : restaurantMock.slice(0, countContent)})
      console.log(this.state.restaurantMock2)
    } else {
      let countContent = 6;
      this.setState({restaurantMock2 : restaurantMock.slice(0, countContent)})
      console.log(this.state.restaurantMock2)
    }
  }

  render() {
    return (
      <div className="background">
        <div className="white-background">
          <div className="wh-ba-left">
            <p>รีวิวร้านอาหาร</p>
          </div>
          <div className="wh-ba-right">
            <a href="user-add-res.html">
              <p>เพิ่มร้านอาหาร</p>
            </a>
            <a href="#" id="see-more-restaurant">
              <p
                className="wh-ba-right-ptag"
                onClick={() => this.restaurantList((true))}
              >
                ดูทั้งหมด
              </p>
            </a>
          </div>
        </div>
        <div id="card-container" class="card-container">
          {this.state.restaurantMock2.map(o => (
            <Card name={o.restaurantName} img={o.restaurantImage} /> 
          ))}
        </div>
      </div>
    );
  }

}

export default ReviewRes;
