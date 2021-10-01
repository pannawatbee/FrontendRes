import { Link } from "react-router-dom";
function Card(props) {
  return (
    <div class="card1">
       <Link to={props.url}>
        <img src={props.img} alt="" />
        <p>{props.name}</p>
        </Link>
    </div>
  );
}
export default Card;
