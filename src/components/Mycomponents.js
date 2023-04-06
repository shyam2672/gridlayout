import React from "react";
import "./Styles.css";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { HiFolderOpen } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";

import { GoGraph } from "react-icons/go";
import { FaWpforms } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import { IoToggle } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";




const MyComponent = () => {
  return (
    <div className="container">
      {/* First column */}
      <div className="col1">
        <div className="row1">
          {/* First row */}
          <div className="col1-row1-sec1">
            <h2 style={{ marginBottom: "0px", color: "#e95c65" }}> Hira R.</h2>
            <h4 style={{ marginTop: "0px", color: "white" }}>UX/UI designer</h4>
          </div>
          <div
            className="col1-row1-sec2"
            style={{
              paddingTop: "30px",
              margin: "0px",
              paddingLeft: "0px",
              paddingRight: "0px",
              paddingBottom: "0px",
            }}
          >
            <div
              className="col1-row1-sec2-1"
              style={{ textAlign: "center", color: "white", padding: "0px" }}
            >
              <p style={{ margin: "0px", padding: "0px" }}>125</p>
              <p style={{ margin: "0px", padding: "0px" }}>Projects</p>
            </div>
            <div
              className="col1-row1-sec2-2"
              style={{ textAlign: "center", color: "white", padding: "0px" }}
            >
              <p style={{ margin: "0px", padding: "0px" }}>$124</p>

              <p style={{ margin: "0px", padding: "0px" }}>Revenue</p>
            </div>
          </div>
        </div>
        <div className="row22">
          <div className="d1" style={{ marginTop: "15px" }}>
            <HiFolderOpen style={{ marginRight: "10px" }} />
            Dashboard
          </div>
          <div className="d1">
            <BsFillEnvelopeFill style={{ marginRight: "10px" }} /> Email
          </div>
          <div className="d1">
            <SlCalender style={{ marginRight: "10px" }} />
            Calender
          </div>
          <div className="d1">
            <GoGraph style={{ marginRight: "10px" }} />
            Graph
          </div>
          <div className="d1">
            <FaWpforms style={{ marginRight: "10px", fontSize: "25px" }} />
            Forms
          </div>
        </div>
        <div className="row3">
          <h3> Go Pro</h3>
          <p>Upgrade your plan to get pro benefits </p>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              marginLeft: "65px",
              height: "30px",
            }}
          >
            Lets' Start
          </button>
        </div>
      </div>

      {/* Second column */}
      <div className="col2">
        <div className="row1 ">
          <div className="col2-row1-1">
            <HiCurrencyDollar
              style={{ height: "75px", width: "75px", color: "black" }}
            />
          </div>
          <div className="col2-row1-2">
            <h3 style={{ marginBottom: "0px", color: "white" }}>
              Total revenue
            </h3>
            <h1 style={{ marginTop: "0px", color: "white" }}>$92,983</h1>
          </div>
        </div>
        <div className="row2" style={{ color: "white" }}>
          {/* Second row */}
          <div className="sub-col1">
            <h1 style={{ margin: "5px", marginTop: "10px" }}>Travel</h1>
            <h4 style={{ margin: "5px", marginTop: "15px" }}>
              Mobile application
            </h4>
            <h6 style={{ margin: "5px", marginTop: "15px" }}>seen by</h6>
            <div class="profile-images">
  <img src="C:\Users\vijay\Downloads\WhatsApp Image 2023-04-05 at 19.26.33.jpg" alt="Profile Image" />
  <img src="C:\Users\vijay\Downloads\WhatsApp Image 2023-04-05 at 19.26.33.jpg" alt="Profile Image" />
  <img src="C:\Users\vijay\Downloads\WhatsApp Image 2023-04-05 at 19.26.33.jpg" alt="Profile Image" />

</div>
<button style={{width:"45%",marginRight:"20px",backgroundColor:"blue",color:"white",borderRadius:"20%"}}>Tour</button>
<button  style={{width:"45%",backgroundColor:"black",color:"white",borderRadius:"20%"}}>Trip</button>
<button style={{width:"60%", marginTop:"10px",backgroundColor:"black",color:"white",borderRadius:"20%"}}>Transport</button>

            <div className="circular-container">
              <img className="circule-image" src={""} alt="" />
            </div>
          </div>
          <div className="sub-col2">
            <h1 style={{ margin: "5px", marginTop: "10px" }}>Hotel</h1>
            <h4 style={{ margin: "5px", marginTop: "15px" }}>Dashboard</h4>
            <h6 style={{ margin: "5px", marginTop: "15px" }}>seen by</h6>
            <div class="profile-images">
  <img src="C:\Users\vijay\Downloads\WhatsApp Image 2023-04-05 at 19.26.33.jpg" alt="Profile Image" />
  <img src="C:\Users\vijay\Downloads\WhatsApp Image 2023-04-05 at 19.26.33.jpg" alt="Profile Image" />
  <img src="C:\Users\vijay\Downloads\WhatsApp Image 2023-04-05 at 19.26.33.jpg" alt="Profile Image" />

</div>
<button style={{width:"45%",marginRight:"20px",backgroundColor:"blue",color:"white",borderRadius:"20%"}}>Tour</button>
<button  style={{width:"45%",backgroundColor:"black",color:"white",borderRadius:"20%"}}>Trip</button>
<button style={{width:"60%", marginTop:"10px",backgroundColor:"black",color:"white",borderRadius:"20%"}}>Transport</button>

          </div>
        </div>
        <div className="row3">
          <div className="col2-row3-sec1">
            <h3 style={{ textAlign: "left", paddingLeft: "35px" }}>
              Free Slots Available{" "}
              <IoToggle
                style={{ color: "blue", marginLeft: "200px", marginTop: "0px" }}
              />
            </h3>
          </div>
          <div className="col2-row3-sec2">
            <div className="card-stack">
              <div class="card" style={{ backgroundColor: "#fd545e" }}>
                <h2 style={{ marginTop: "5px" }}>12</h2>
                <h4>June</h4>
              </div>
              <div class="card">
                <h2 style={{ marginTop: "5px" }}>12</h2>
                <h4>June</h4>
              </div>
              <div class="card">
                <h2 style={{ marginTop: "5px" }}>12</h2>
                <h4>June</h4>
              </div>
            </div>

            <div className="card-stack">
              <div class="card">
                <h2 style={{ marginTop: "5px" }}>12</h2>
                <h4>June</h4>
              </div>
              <div class="card">
                <h2 style={{ marginTop: "5px" }}>12</h2>
                <h4>June</h4>
              </div>
              <div class="card">
                <h2 style={{ marginTop: "5px" }}>12</h2>
                <h4>June</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third column */}
      <div className="col3">
        <div className="row1">
          <div className=""></div>
          <div className="col3-row1-1">
              Company icon
          </div>
          <div className="col3-row1-2">
            <h1> Dear Client</h1>
            <h4>join our community. It help managing your projects</h4>
          </div>
          <div className="col3-row1-3"><IoIosArrowDown/></div>
        </div>
        <div className="row2">
          <div className="col3-row2-1">
            <h2>Transaction Detail</h2>
            <h3>Hi Hira</h3>
            <h3>$4763.40</h3>
            <h6>Available Balance</h6>
          </div>
          <div className="col3-row2-2">
            <img src="grid\src\components\icon.jpg" style={{padding:"20px",borderRadius:"100%",height:"70px",width:"70px"}}/>
            <p style={{color:"white",paddingLeft:"30px",paddingTop:"20px"}}>...3863</p>
            <button style={{color:"white",marginLeft:"30px",marginTop:"20px",backgroundColor: "#fd545e" ,height:"40px",width:"70px"}}>
                Send
            </button>
          </div>
        </div>
        <div className="row3">
          <div className="sub-col1">
            <h4
              style={{
                margin: "7px",
                color: "white",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Project <BsThreeDotsVertical style={{marginLeft:"230px"}}/>
            </h4>

            <h2 style={{ margin: "7px", color: "#e95c65", textAlign: "left" }}>
              {" "}
              Hira R.
            </h2>
            <h4 style={{ margin: "7px", color: "white", textAlign: "left" }}>
              UX/UI designer
            </h4>
            <h4 style={{ marginLeft: "7px",marginTop: "30px", color: "white", textAlign: "left" }}>
              Project Progress
            </h4>
          </div>
          <div className="sub-col2">
            <h4 style={{ margin: "7px", color: "white", textAlign: "left" }}>
              Project Progress <BsThreeDotsVertical style={{marginLeft:"160px"}}/>
            </h4>
            favicon
            <p>3 remaining projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
