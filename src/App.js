import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Container, Button, Table } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";

export function Layout() {
  return (
    <nav className="head">
      <NavLink 
        to="/" 
        className='link px-2' 
        style={({ isActive }) => {
          return {
          textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าแรก
      </NavLink>
      <NavLink 
        to="/product" 
        className='link px-2'
        style={({ isActive }) => {
          return {
          textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ตารางเทียบแคลอรี
      </NavLink>
      <NavLink 
        to="/contact" 
        className='link px-2'
        style={({ isActive }) => {
          return {
          textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

function Index() {
  const header1 = useRef();
  return (  
    <>
    <Layout />
    <p align='left'><div className="cardFood">
      <p align='center'><img className="card" src="card-03.jpg" alt="mheegrati"></img></p>
      <h1>หมีกระทิ</h1>
      <p>
      หมี่กะทิ เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี 
      ที่ได้สืบทอดกันมารุ่นต่อรุ่น มีส่วนผสมจากวัตถุดิบธรรมชาติที่มีในท้องถิ่น มีความโดดเด่นและมีเอกลักษณ์เฉพาะที่มีความประณีตสวยงาม 
      หมี่กะทิของอุบลราชธานีจะไม่ใช้เส้นหมี่เหมือนภาคกลาง เนื่องจากชาวอีสาน จะทำเส้นก๋วยเตี๋ยวขึ้นเอง ซึ่งเรียกว่า "หมี่" คล้ายกับเส้นเล็กของทางภาคกลาง 
      แต่จะเป็นเส้นที่ตากแห้ง และขดเป็นวงกลม เช่นเดียวกับเส้นจันท์ เมื่อทำหมี่กะทิ ต้องนำเส้นหมี่ไปแช่น้ำให้คลายตัว แล้วลวกด้วยน้ำเดือดจนเส้นนุ่ม 
      </p>
      <Button className="button">เรียนรู้เพิ่มเติม</Button>
    </div></p>
    </>
  );
}

function Product(){
  const table = useRef();
  const tr = useRef([]);
  const DeleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.deleteRow(index);
  }

  const data = [
    ["หมีกะทิ", 600],
    ["อู๋หน้อไม้พุ่งปลา", 250],
    ["แกงเห็ดเพาะไข่มดแดง", 300]
  ]

  return (
    <>
    <Layout />
    <h2>ตารางเทียบแคลอรี</h2>
    <Table striped bordered hover className="my-3" ref={table}>
      <thead>
        <tr>
          <th>เมนูอาหาร</th>
          <th>พลังงานที่ได้รับ</th>
          <th>เลือกเมนู</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          return (
            <tr
              ref={(el) => {
                tr.current[i] = el;
              }}
              key={i}
            >
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td className="text-center"><Button >เลือกเมนู</Button></td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
    <Container className="p-3 my-3 bg-light">
       <Routes> 
        <Route path="/" element={<Index />} />
        <Route path="/main" element={<Index/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;