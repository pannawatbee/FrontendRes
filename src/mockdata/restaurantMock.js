import Hottobun from "../assets/images/Hottobun.jpg";
import copper from "../assets/images/copper.png";
import starbuck from "../assets/images/starbuck.jpg";
import blackcan from "../assets/images/blackcan.jpg";
import sawadee from "../assets/images/sawadee.jpg";
import santafe from "../assets/images/santafe.jpg";
import Rolling from "../assets/images/Rolling.jpg";
import ichiban from "../assets/images/ichiban.jpg";
const restaurantMock = [
  {
    restaurantId: 1,
    restaurantName: "Hottobun",
    restaurantImage: Hottobun,
    restaurantDetailLink: "ReviewCard?resId=1",
    restaurantDetail:
      "ฮอตโตะ บัน เป็นร้านอาหารกึ่งคาเฟ่สไตล์ญี่ปุ่นร่วมสมัย มีเมนูที่อร่อยมากหลากหลาย จากไอเดียสุดเฉียบของเชฟมากฝีมือจาก New York...",
    restaurantRating: 4.2,
    restaurantReviewCount: 5,
  },
  {
    restaurantId: 2,
    restaurantName: "Copper Buffet",
    restaurantImage: copper,
    restaurantDetailLink: "ReviewCard?resId=2",
    restaurantDetail:
      "ร้านอาหารบุฟเฟ่ต์นานาชาติที่เริ่มจากความชอบอาหารบุฟเฟ่ต์นานาชาติของตัวเจ้าของร้านคุณซัน กับครอบครัว ซึ่งมักไปรับประทานบุฟเฟ่ต์โรงแรมกันอย่างน้อยเดือนละ 1 ครั้ง",
    restaurantRating: 4.2,
    restaurantReviewCount: 5,
  },
  {
    restaurantId: 3,
    restaurantName: "Starbuck",
    restaurantImage: starbuck,
    restaurantDetailLink: "ReviewCard?resId=3",
    restaurantDetail:
      "วันนี้จากร้านกาแฟที่มีอยู่มากกว่า 80 ประเทศสตาร์บัคส์ถือได้ว่าเป็นผู้บุกบิกในการคั่วบดและค้าปลีกกาแฟคุณภาพเยี่ยมของโลก",
    restaurantRating: 4.2,
    restaurantReviewCount: 5,
  },
  {
    restaurantId: 4,
    restaurantName: "Black Canyon",
    restaurantImage: blackcan,
    restaurantDetailLink: "ReviewCard?resId=4",
    restaurantDetail:
      "เป็นร้านกาแฟที่มีสาขามากที่สุดในประเทศไทย และเป็นแบรนด์ท้องถิ่นที่แข็งแกร่งที่สุดของประเทศ เพราะใช้เมล็ดกาแฟสดจากแหล่งเพาะปลูกที่ดีที่สุดของโลก",
    restaurantRating: 3.9,
    restaurantReviewCount: 4,
  },
  {
    restaurantId: 5,
    restaurantName: "Sawasdee",
    restaurantImage: sawadee,
    restaurantDetailLink: "ReviewCard?resId=5",
    restaurantDetail:
      "จากร้านก๋วยเตี๋ยวเรือเอี้ยมจุ๊นในคลองรังสิต ผ่านประสบการณ์อันยาวนานกว่า 16 ปี วันนี้ “สวัสดี” ขอต้อนรับทุกท่านด้วยความอบอุ่น",
    restaurantRating: 3.9,
    restaurantReviewCount: 4,
  },
  {
    restaurantId: 6,
    restaurantName: "Santa Fe'Steak",
    restaurantImage: santafe,
    restaurantDetailLink: "ReviewCard?resId=6",
    restaurantDetail:
      "สเต็ก Santafe ที่ส่งต่อความอร่อยของ Steak(สเต็ก) ชิ้นโตรสชาติเข้มผ่านขบวนรถไฟแห่งความอร่อยมายังท่านทุกวัน",
    restaurantRating: 3.9,
    restaurantReviewCount: 4,
  },
  {
    restaurantId: 7,
    restaurantName: "Rolling Roasters Futuristic Coffee ",
    restaurantImage: Rolling,
    restaurantDetailLink: "ReviewCard?resId=7",
    restaurantDetail:
      "Rolling roaster futuristic coffee ร้านกาแฟชื่อดังที่ตั้งอยู่ริมถนนพุทธมณฑลสาย 4 พรานนกเส้นตัดใหม่ ตอนเปิดใหม่ๆคิวยาวมาตั้งแต่ 07:00 น",
    restaurantRating: 3.9,
    restaurantReviewCount: 4,
  },
  {
    restaurantId: 8,
    restaurantName: "Ichiban Ramen",
    restaurantImage: ichiban,
    restaurantDetailLink: "ReviewCard?resId=8",
    restaurantDetail:
      "ฮะจิบัง ราเมน (Hachiban Ramen) หรือร้านราเมนหมายเลข 8 ก่อกำเนิดขึ้นสาขาแรก ในปี ค.ศ. 1967 บนถนน หลวงสาย 8 เขตคางะ เมืองอิชิกาวา ประเทศญี่ปุ่น ด้วยรสชาติของน้ำซุปเข้มข้น และกลมกล่อม เข้ากับเส้นราเมนเหนียวนุ่ม ทำให้ชาวญี่ปุ่นชื่นชอบกลายเป็นร้านบะหมี่ที่ได้รับความนิยมเพิ่มขึ้นตามลำดับ จนกลายมาเป็นราเมนที่ชื่นชอบของคนญี่ปุ่น",
    restaurantRating: 3.9,
    restaurantReviewCount: 4,
  },
];
export { restaurantMock };
