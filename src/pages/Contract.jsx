import React from "react";

import "../assets/css/Contract.css";
// import { Link } from "react-router-dom";
function Contract() {
  return (
    <div class="contract-background">
      <div class="contract-container">
        <div class="contract-white-background">
          <div class="contract-wh-ba-left">
            <p>ติดต่อเรา</p>
          </div>
        </div>
        <iframe
          title="title"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.9120288260033!2d100.52751395066703!3d13.904206190201151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e283629d3d57bd%3A0x2a72be2241b7c621!2z4LmA4LiC4LiV4Lit4Li44LiV4Liq4Liy4Lir4LiB4Lij4Lij4Lih4LiL4Lit4Lif4LiV4LmM4LmB4Lin4Lij4LmM4Lib4Lij4Liw4LmA4LiX4Lio4LmE4LiX4Lii!5e0!3m2!1sth!2sth!4v1626884188324!5m2!1sth!2sth"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          class="contract-google-map"
        ></iframe>
        <div class="contact">
          <p>ติดต่อเรา : นาย ปัณณวัชร์ อนันต์ชัยธรรม</p>
          <p>Facebook : Pannawat Bee</p>
          <p>Tel : 0909783280</p>
        </div>
      </div>
    </div>
  );
}

export default Contract;
