// import { Link } from "react-router-dom";
// import { restaurantMock } from "../mockdata/restaurantMock";
// import { restaurantMock } from "../../mockdata/restaurantMock";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
function ReviewCardModel(props) {
  let a = props.starRating;
  const { user } = useContext(AuthContext);
  // console.log(user);
  // console.log(user.userType);
  function handleDelete() {
    var handleDelete = document.getElementById(`delete-${props.id}`);
    handleDelete.remove();
    axios.delete("http://localhost:8000/review/" + props.id).then((res) => {
      // console.log(res.data.resteraunt);
      // setResteraunt(res.data.resteraunt);
    });
  }
  function checkUser() {
    if (user) {
      if (user.userType === "admin") {
        return (
          <button class="delete" type="button" onClick={handleDelete}>
            DELETE
          </button>
        );
      } else return null;
    }
  }
  function returnStar(a) {
    if (a === 1) {
      return <span class="star-review">★</span>;
    }
    if (a === 2) {
      return <span class="star-review">★★</span>;
    }
    if (a === 3) {
      return <span class="star-review">★★★</span>;
    }
    if (a === 4) {
      return <span class="star-review">★★★★</span>;
    }
    if (a === 5) {
      return <span class="star-review">★★★★★</span>;
    }
  }
  return (
    <div class="bac-left-card" id={`delete-${props.id}`}>
      <div class="name-date">
        <span class="name">pannawat</span>
        <span class="date">{props.upDateAt.slice(0,10)}</span>
      </div>
      {checkUser()}
      {/* {user.userType==='admin'?
        <button class="edit" type="button">
          DELETE
        </button>:null
      } */}
      <div class="heading-review">
        <span class="heading-review-star">{props.reviewTitle}</span>
        {returnStar(a)}
        {/* <span class="headung-reivew-star">{props.starRating} ดาว</span> */}
      </div>
      <img src={props.reviewImage} alt="" class="center" />
      <span class="detail">รายละเอียดรีวิว</span>
      <div class="content">
        <p class="p-content">{props.reviewDetail}</p>
      </div>
    </div>
  );
}
export default ReviewCardModel;
