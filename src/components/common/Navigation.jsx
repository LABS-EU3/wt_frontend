import React, { useState } from "react";
import styled from "styled-components";
import SideNav, { MenuIcon } from "react-simple-sidenav";
import Logo from "./Logo";

const StyledNavigation = styled.div`
  .nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem 0;
    padding: 0 2rem;
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
        titleStyle={{ backgroundColor: "#d84727" }}
        items={[
          <a
            target="_blank"
            href="https://github.com/gauravchl/react-simple-sidenav"
          >
            Dashboard
          </a>,
          <a
            target="_blank"
            href="https://github.com/gauravchl/react-simple-sidenav"
          >
            Excercises
          </a>,
          <a
            target="_blank"
            href="https://www.npmjs.com/package/react-simple-sidenav"
          >
            Workouts
          </a>,
          <a
            target="_blank"
            href="https://gauravchl.github.io/react-simple-sidenav/demo/"
          >
            Profile
          </a>
        ]}
      />
    </StyledNavigation>
  );
}

export default Navigation;
