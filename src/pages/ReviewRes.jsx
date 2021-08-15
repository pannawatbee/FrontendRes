import React from 'react';
import '../assets/css/ReviewRes.css'
import {restaurantMock} from '../mockdata/restaurantMock'
import Card from '../components/reviewres/Card';


function ReviewRes(){
     let isSeeAll=false;
     restaurantList();
    function restaurantList(isSeeAll=false) {
     if (isSeeAll) {
     let countContent = restaurantMock.length;
     const restaurantMock2 =restaurantMock.slice(0,countContent)
     console.log(restaurantMock2);
     }
    else {
           let countContent = 6;
           const restaurantMock2 =restaurantMock.slice(0,countContent)
           console.log(restaurantMock2);
         }
    }
    
    
    
        return(
        <div class="background">
      <div class="white-background">
        <div class="wh-ba-left">
          <p>รีวิวร้านอาหาร</p>
        </div>
        <div class="wh-ba-right">
          <a href="user-add-res.html"><p>เพิ่มร้านอาหาร</p></a>
          <a href="#" id="see-more-restaurant"
            ><p class="wh-ba-right-ptag" onClick={()=>restaurantList(isSeeAll=true)}>ดูทั้งหมด</p></a
          >
        </div>
      </div>
      <Card/>
    </div>
    )
}

export default ReviewRes;
