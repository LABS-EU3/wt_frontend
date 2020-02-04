import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useToast,
  useDisclosure
} from "@chakra-ui/core";
import styled from "styled-components";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Logo from "./Logo";
import { isLoggedIn } from "../../utils";

const isSignedIn = isLoggedIn();

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

const StyledLinks = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  color: #343741;
  flex-direction: column;
  align-items: center;

  a {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 0.5rem 0;
    justify-content: center;
    padding: 1rem;
    transition: all 0.2s ease-in-out;
    align-items: center;

    &:hover {
      background-color: #a9a9a9;
    }
  }
`;

const Navigation = ({ location }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState("left");
  const toast = useToast();

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
    alert("Logged out successfully", "Come back soon 😀", "success");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  if (isSignedIn === true && location.pathname !== "/onboarding") {
    return (
      <StyledNavigation>
        <div className="nav">
          <i className="fas fa-2x fa-bars" onClick={onOpen}></i>
          <Logo />
        </div>

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              justifyContent="center"
              display="flex"
            >
              <Logo />
            </DrawerHeader>
            <DrawerBody>
              <StyledLinks>
                <Link to="/">
                  Dashboard &nbsp; <i className="fas fa-chart-line"></i>
                </Link>

                <Link to="/exercises">
                  Exercises &nbsp; <i className="fas fa-running"></i>
                </Link>

                <Link to="/workouts">
                  Workouts &nbsp; <i className="fas fa-dumbbell"></i>
                </Link>

                <Link to="/schedule">
                  Schedule &nbsp; <i className="fas fa-calendar-alt"></i>
                </Link>

                <Link to="/workouthistory">
                  Workout History &nbsp; <i className="fas fa-history"></i>
                </Link>

                <Link to="/buddies">
                  Friends &nbsp; <i className="fas fa-users"></i>
                </Link>

                <Link to="/profile">
                  Profile &nbsp; <i className="far fa-user"></i>
                </Link>

                <Link to="/gallery">
                  Gallery &nbsp; <i className="fas fa-image"></i>
                </Link>

                <Link to="#" onClick={logout}>
                  Logout &nbsp; <i className="fas fa-sign-out-alt"></i>
                </Link>
              </StyledLinks>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
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
