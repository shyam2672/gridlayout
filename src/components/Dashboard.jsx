import React from "react";
import Profile from "./Profile.jsx";
import Navbar from "./navbar.jsx";
import Advertise from "./advertise.jsx";
import Totalrevenue from "./totalrevenue.jsx";
import Travlehotel from "./travle-hotel.jsx";
import Freeslots from "./freeslots.jsx";
import Client from "./client.jsx";
import Transaction from "./transaction.jsx";
import Project from "./project.jsx";
import styled from "styled-components";

export default function Dashboard() {
  return (
    <Section>
      <div className="grid">
        <div className="column_one">
          <Profile />
          <Navbar/>
          <Advertise/>
        </div>
        <div className="column_two">
          {/* <Totalrevenue /> */}
          {/* <Travlehotel /> */}
          {/* <Freeslots /> */}
        </div>
        <div className="column_three">
          {/* <Client /> */}
          {/* <Transaction /> */}
          {/* <Project /> */}
        </div>
      </div>
    </Section>
  );
}
// export default Dashboard;

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: row;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .column_one {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .column_two {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .column_three {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .column_one,
      .column_two {
        grid-template-rows: 1fr;
      }
      .column_three {
        grid-template-rows: 1fr;
      }
    }
  }
`;
