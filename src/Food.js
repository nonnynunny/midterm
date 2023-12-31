import React from "react";
import { Layout } from "./App";

function Foodlist1() {
    <>
    <Layout />
    <div className="cardFood">
      <p align='center'><img className="card" src="card-03.jpg" alt="mheegrati"></img></p>
      <h1>หมีกระทิ</h1>
      <p>
      หมี่กะทิ เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี 
      ที่ได้สืบทอดกันมารุ่นต่อรุ่น มีส่วนผสมจากวัตถุดิบธรรมชาติที่มีในท้องถิ่น มีความโดดเด่นและมีเอกลักษณ์เฉพาะที่มีความประณีตสวยงาม 
      หมี่กะทิของอุบลราชธานีจะไม่ใช้เส้นหมี่เหมือนภาคกลาง เนื่องจากชาวอีสาน จะทำเส้นก๋วยเตี๋ยวขึ้นเอง ซึ่งเรียกว่า "หมี่" คล้ายกับเส้นเล็กของทางภาคกลาง 
      แต่จะเป็นเส้นที่ตากแห้ง และขดเป็นวงกลม เช่นเดียวกับเส้นจันท์ เมื่อทำหมี่กะทิ ต้องนำเส้นหมี่ไปแช่น้ำให้คลายตัว แล้วลวกด้วยน้ำเดือดจนเส้นนุ่ม 
      </p>
      <Button className="button">เรียนรู้เพิ่มเติม</Button>
    </div>
    </>
}

function Foodlist2() {
    <>
    <div className="cardFood">
      <p align='center'><img className="card" src="card-03.jpg" alt="mheegrati"></img></p>
      <h1>หมีกระทิ</h1>
      <p>
      หมี่กะทิ เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี 
      ที่ได้สืบทอดกันมารุ่นต่อรุ่น มีส่วนผสมจากวัตถุดิบธรรมชาติที่มีในท้องถิ่น มีความโดดเด่นและมีเอกลักษณ์เฉพาะที่มีความประณีตสวยงาม 
      หมี่กะทิของอุบลราชธานีจะไม่ใช้เส้นหมี่เหมือนภาคกลาง เนื่องจากชาวอีสาน จะทำเส้นก๋วยเตี๋ยวขึ้นเอง ซึ่งเรียกว่า "หมี่" คล้ายกับเส้นเล็กของทางภาคกลาง 
      แต่จะเป็นเส้นที่ตากแห้ง และขดเป็นวงกลม เช่นเดียวกับเส้นจันท์ เมื่อทำหมี่กะทิ ต้องนำเส้นหมี่ไปแช่น้ำให้คลายตัว แล้วลวกด้วยน้ำเดือดจนเส้นนุ่ม 
      </p>
      <Button className="button">เรียนรู้เพิ่มเติม</Button>
    </div>
    </>
}

export default Foodlist1, Foodlist2;

