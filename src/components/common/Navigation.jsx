import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import SideNav from "react-simple-sidenav";
import PropTypes from "prop-types";
import { useToast } from "@chakra-ui/core";

import Logo from "./Logo";
import { isLoggedIn, getUserDetails } from "../../utils";

const isSignedIn = isLoggedIn();
const userData = getUserDetails();

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
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
    margin-bottom: 3rem;
  }
`;

const Navigation = ({ location }) => {
  const toast = useToast();
  const [showNav3, setshowNav3] = useState(false);

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

  const logout = () => {
    localStorage.removeItem("userData");
    alert("Logged out successfully", "Expecting you soon 😀", "success");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  if (isSignedIn === true && location.pathname !== "/onboarding") {
    return (
      <StyledNavigation>
        <div className="nav">
          <i
            className="fas fa-2x fa-bars"
            onClick={() => setshowNav3(true)}
          ></i>
          <Logo />
        </div>

        <SideNav
          showNav={showNav3}
          onHideNav={() => setshowNav3(false)}
          title={<div>Hello {userData.firstname},</div>}
          titleStyle={{ backgroundColor: "#ff8744" }}
          items={[
            <Link to="/">
              Dashboard &nbsp; <i className="fas fa-chart-line"></i>
            </Link>,
            <Link to="/exercises">
              Exercises &nbsp; <i className="fas fa-running"></i>
            </Link>,
            <Link to="/workouts">
              Workouts &nbsp; <i className="fas fa-dumbbell"></i>
            </Link>,
            <Link to="/schedule">
              Schedule &nbsp; <i className="fas fa-calendar-alt"></i>
            </Link>,
            <Link to="/workouthistory">
              Workout History &nbsp; <i className="fas fa-history"></i>
            </Link>,

            <Link to="/profile">
              Profile &nbsp; <i className="far fa-user"></i>
            </Link>,
            <Link to="/settings">
              Settings &nbsp; <i className="fas fa-cogs"></i>
            </Link>,
            <Link to="#" onClick={logout}>
              Logout &nbsp; <i className="fas fa-sign-out-alt"></i>
            </Link>
          ]}
        />
      </StyledNavigation>
    );
  } else {
    return "";
  }
};

export default withRouter(Navigation);

Navigation.propTypes = {
  location: PropTypes.object.isRequired
};
