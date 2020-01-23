import React, { useEffect, useState } from "react";
import { withApollo } from "react-apollo";
import {
  Flex,
  Box,
  Heading,
  Avatar,
  useToast,
  Button,
  useDisclosure
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import {
  IoIosPerson,
  IoIosMail,
  IoIosFitness,
  IoIosTrendingUp
} from "react-icons/io";

import logoImage from "../../images/login_image.png";
import DashboardStyle from "./DashboardStyle";

import { GET_USER_DETAILS } from "../../graphql/queries";
import CustomSpinner from "../common/Spinner";
import ModalPopup from "../common/ModalPopup";
import EditProfile from "../common/EditProfile";

const ProfilePage = ({ client, history }) => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

  const handleSave = () => {};

  useEffect(() => {
    client
      .query({
        query: GET_USER_DETAILS
      })
      .then(res => {
        console.log(res);
        setUserData(res.data.user);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        alert("An error occurred.", "Unable to load", "error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (isLoading) {
  //   return (
  //     <Box>
  //       <Flex
  //         width="100vw"
  //         height="100vh"
  //         justifyContent="center"
  //         align="center"
  //       >
  //         <CustomSpinner thickness="6px" size="xl" text="Loading..." />
  //       </Flex>
  //     </Box>
  //   );
  // }

  // if (isLoading) {
  //   return <CustomSpinner thickness="6px" size="xl" text="Loading..." />;
  // }

  return (
    <Box>
      {/* <Flex width="100vw" height="100vh" justifyContent="center" align="center">
        <CustomSpinner thickness="6px" size="xl" text="Loading..." />
      </Flex> */}
      <DashboardStyle>
        {/* <div className="welcome">
          <Heading marginBottom="25px" textAlign="left">
            Hello {userData.name}! Welcome to Workout Tracker ...
          </Heading>
        </div> */}

        <div className="dashboard-content">
          <div className="user-detail">
            <Button variant="link" variantColor="orange" onClick={onOpen}>
              Edit Profile
            </Button>
            <ModalPopup isOpen={isOpen} onClose={onClose} title="Edit Profile">
              <EditProfile
                data={userData}
                onSave={handleSave}
                onClose={onClose}
              />
            </ModalPopup>
            <Box paddingLeft="50px">
              <Flex paddingY="30px" alignItems="center">
                <Box as={IoIosPerson} size="50px" />
                <Box textAlign="left" paddingLeft="20px">
                  <p>Name</p>
                  <p>{`${userData.firstname} ${userData.lastname}`}</p>
                </Box>
              </Flex>
              <Flex paddingY="30px" alignItems="center">
                <Box as={IoIosMail} size="50px" />
                <Box textAlign="left" paddingLeft="20px">
                  <p>Email</p>
                  <p>{userData.email}</p>
                </Box>
              </Flex>
              <Flex paddingY="30px" alignItems="center">
                <Box as={IoIosFitness} size="50px" />
                <Box textAlign="left" paddingLeft="20px">
                  <p>Weight</p>
                  <p>
                    {userData.weight
                      ? `${userData.weight} ${userData.weightUnit.name}`
                      : "none"}
                  </p>
                </Box>
              </Flex>
              <Flex paddingY="30px" alignItems="center">
                <Box as={IoIosTrendingUp} size="50px" />
                <Box textAlign="left" paddingLeft="20px">
                  <p>Height</p>
                  <p>
                    {userData.height
                      ? `${userData.height} ${userData.heightUnit.name}`
                      : "none"}
                  </p>
                </Box>
              </Flex>
            </Box>

            <Box
              bg="tomato"
              color="white"
              p={4}
              width="70%"
              rounded="lg"
              marginTop="30px"
              marginLeft="15%"
            >
              <span role="img" aria-label="fire-emoji">
                🔥🔥🔥
              </span>{" "}
              You have a {userData.streak} days streak. Keep it up!
            </Box>
          </div>

          <div className="dasboard-detail">
            <section className="quotes">
              <Avatar
                src={logoImage}
                size="2xl"
                marginLeft="35%"
                marginBottom="20px"
              />
              <Heading>{`${userData.firstname} ${userData.lastname}`}</Heading>
            </section>

            <section className="goal">
              <p>Recent Activity</p>
              <Heading as="h4" size="md">
                {/* {profileData.user.goal} */}
              </Heading>
            </section>
          </div>
        </div>
      </DashboardStyle>
    </Box>
  );
};

export default withApollo(ProfilePage);
