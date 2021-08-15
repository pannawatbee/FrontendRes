import {restaurantMock} from '../../mockdata/restaurantMock'
function  Card(isSeeAll = false){
    let countContent = 0;
    if (isSeeAll) countContent = restaurantMock.length;
    else {
        countContent = 6;}
        for (let i = 0; i < countContent; i++) {
            return(
                <div id="card-container" class="card-container">
                 <div class="card1">
                  <a href="review-card.html"
                    ><img src="picture/Hottobun.jpg" alt="" />
                    <p>Hottobun</p></a
                  >
                </div> 
              </div>
            )
        }
       }
export default  Card;