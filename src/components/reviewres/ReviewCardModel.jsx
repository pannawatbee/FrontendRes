// import { Link } from "react-router-dom";
// import { restaurantMock } from "../mockdata/restaurantMock";
import { restaurantMock } from "../../mockdata/restaurantMock";
function ReviewCardModel(props) {
  return (
    <div class="bac-left-card">
      <div class="name-date">
        <span class="name">{props.user}</span>
        <span class="date">{props.date}</span>
      </div>
      <div class="heading-review">
        <span class="heading">{props.reviewTitle}</span>
        <span class="headung-reivew-star">{props.starRating}</span>
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
