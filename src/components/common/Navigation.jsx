import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SideNav from "react-simple-sidenav";
import Logo from "./Logo";

const StyledNavigation = styled.div`
  color: #ff8744;

  .nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1rem 0;
    padding: 1rem 2rem;
    background-color: white;
    -webkit-box-shadow: 0px 0px 5px 0px #ff8744;
    -moz-box-shadow: 0px 0px 5px 0px #ff8744;
    box-shadow: 0px 0px 5px 0px #ff8744;
  }
`;

function Navigation() {
  const [showNav3, setshowNav3] = useState(false);
  return (
    <StyledNavigation>
      <div className="nav">
        <i class="fas fa-2x fa-bars" onClick={() => setshowNav3(true)}></i>
        <Logo />
      </div>

      <SideNav
        showNav={showNav3}
        onHideNav={() => setshowNav3(false)}
        title={
          <div>
            Hello name,
            <i class="fas fa-times"></i>
          </div>
        }
        titleStyle={{ backgroundColor: "#ff8744" }}
        items={[
          <Link to="/dashboard">Dashboard &nbsp;</Link>,
          <Link to="/excercises">Excercises &nbsp;</Link>,
          <Link to="/workouts">
            Workouts &nbsp; <i class="fas fa-dumbbell"></i>
          </Link>,
          <Link to="/profile">
            Profile &nbsp; <i class="far fa-user"></i>
          </Link>,
          <Link to="/settings">
            Settings &nbsp; <i class="fas fa-cogs"></i>
          </Link>
        ]}
      />
    </StyledNavigation>
  );
}

export default Navigation;
