import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TitleHeader from "../TitleHeader";

const Success = () => {
  return (
    <div className="row" style={{height:"100vh"}}>
      <div className="col-lg-3"><br />
        <TitleHeader isback={true} title={"Thank You"}/>
        <div>
            <div style={{marginTop:"300px", marginLeft:"100px"}}>
                <img src="images/booking-img/success.png" className="img-fluid" alt="" />
            </div>
            <div>
                <p style={{textAlign:"center", fontSize:"14px", fontWeight:"bold", color:"darkgreen"}}>Success</p>
                <p style={{textAlign:"center", fontSize:"14px", fontWeight:"bold"}}>We acknowledge receipt of your <br /> message and will respond shortly</p>
            </div>
        </div>
        
      </div>

      <div className="col-lg-9">
      <img
          src="images/booking-img/booking-01.png"
          //className="img-fluid"
          style={{width:"100%", height:"100vh"}}
          alt=""
        />
      </div>
    </div>
  );
};

export default Success;
