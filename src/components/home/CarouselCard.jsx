import { Component , useState } from "react";
import { Link } from "react-router-dom";
// react hooks react new version
// 1. เบากว่า
// 2. ง่ายกว่า
function CarouselCard(props){
    return(
        <div>
            <img
            src={props.img}
            alt="Hottobun"
            style={{ width: "100%", height: "820px", opacity: "0.8" }}
            />
            <div className="text">
            <h3>{props.name}</h3>
            <p>
                {props.detail}
            </p>
            <Link to={props.path} class="improve-res">
                <button>อ่านเพิ่มเติม</button>
            </Link>
            </div>
      </div>
    )
}

// class CarouselCard extends Component {
//   constructor(props) {
//     super();
//     this.state = {};
//   }

//   componentDidMount(){
//       console.log(this.props)
//   }

//   render() {
//     return (
//       <div>
//         <img
//           src={this.props.img}
//           alt="Hottobun"
//           style={{ width: "100%", height: "820px", opacity: "0.8" }}
//         />
//         <div className="text">
//           <h3>{this.props.name}</h3>
//           <p>
//             ฮอตโตะ บัน เป็นร้านอาหารกึ่งคาเฟ่สไตล์ญี่ปุ่นร่วมสมัย
//             มีเมนูที่อร่อยมากหลากหลาย จากไอเดียสุดเฉียบของเชฟมากฝีมือจาก New
//             York...
//           </p>
//           <a href="#">
//             <button>อ่านเพิ่มเติม</button>
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

export default CarouselCard;
