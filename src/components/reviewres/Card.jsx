function Card(props) {
  return (
    <div class="card1">
      <a href="review-card.html">
        <img src={props.img} alt="" />
        <p>{props.name}</p>
      </a>
    </div>
  );
}
export default Card;
