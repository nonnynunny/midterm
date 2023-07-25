import React from "react";
import { Layout } from "./App";

function Contact() {
    return (
        <>
        <Layout />
        <div className="profile-card">
            <img className="avatar" src="Profile.jpg"></img>
            <h3>นายจิรัฏฐ์ขจรกิจ วงษาบุตร</h3>
            <div>
                นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร
                <br />
                คณะวิทยาศาสตร์ มหาวิทยาอุบลราชธานี
                <br />
                งานอดิเรก คือ เล่นเกม อ่านการ์ตูน ฟังเพลง ดูหนัง/อนิเมะ
            </div>
        </div>
        </>
    );
}

export default Contact;