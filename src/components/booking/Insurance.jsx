import React from "react";
import TitleHeader from "../TitleHeader";
import { CustomButton, CustomeInput } from "./CustomeInput";
import { useNavigate } from "react-router-dom";

const Insurance = () => {
  const navigate = useNavigate();
  return (
    <div className={`rides`}>
      <div className="rides__left">
        <TitleHeader isback={true} title={"Enter Your Product Price Value"} />
        <div style={{ margin: "10px" }}>
          <span style={{ margin: "20px 10px", fontSize: "12px" }}>
            Enter the total cost of the product
          </span>
          <div style={{ margin: "0px 10px" }}>
            <CustomeInput buttonImage={"->"} name="Insurance" />
          </div>
        </div>
        <div style={{textAlign:"center",  margin: "20px"}}>

        <button
          name={"Submit"}
          onClick={() => navigate("/booking_now",{state: "OutStation"})}
          style={{
            color: "#ffffff",
            background: "#0032a0",
            padding: "5px 10px",
            border: "none",
            width:"100%"
          }}
        >
          Submit
        </button>
        </div>
      </div>
      <div className="rides__right" style={{ height: "100vh" }}></div>
    </div>
  );
};

export default Insurance;
