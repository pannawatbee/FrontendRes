// import { Link } from "react-router-dom";
// import { restaurantMock } from "../mockdata/restaurantMock";
// import { restaurantMock } from "../../mockdata/restaurantMock";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
function ReviewCardModel(props) {
  const { user } = useContext(AuthContext);
  // console.log(user);
  // console.log(user.userType);
  function handleDelete() {
    var handleDelete = document.getElementById(`delete-${props.id}`);
    handleDelete.remove();
   axios.delete("http://localhost:8000/review/"+props.id).then((res) => {
      // console.log(res.data.resteraunt);
      // setResteraunt(res.data.resteraunt);
    });
  }
  function checkUser() {
    if (user) {
      if (user.userType === "admin") {
        return (
          <button class="edit" type="button" onClick={handleDelete}>
            DELETE
          </button>
        );
      } else return null;
    }
  }
  return (
    <div class="bac-left-card" id={`delete-${props.id}`}>
      
      <div class="name-date">
        <span class="name">pannawat</span>
        <span class="date">27-10-2021</span>
      </div>
      {checkUser()}
      {/* {user.userType==='admin'?
        <button class="edit" type="button">
          DELETE
        </button>:null
      } */}
      <div class="heading-review">
        <span class="heading">{props.reviewTitle}</span>
        <span class="headung-reivew-star">{props.starRating} ดาว</span>
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
