import React, { useState, useEffect } from "react";
import SideTitle from "../common/SideTitle";
import DetailList from "./DetailList";
import {
  Flex,
  Box,
  Image,
  Text,
  Stack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon
} from "@chakra-ui/core";

import CustomSpinner from "../common/Spinner";
import { GET_WORKOUT_DETAILS } from "../../graphql/queries";

function WorkoutDetail() {
  return (
    <Box>
      <Flex alignItems="start" justifyContent="space-around">
        <Box maxWidth="40%">
          <SideTitle heading="Total Upper Body Strength Upper Body " />
          <DetailList text="Average Time" heading="20 to 22 minutes" />
          <DetailList text="Intensity" heading="Moderate" />
          <DetailList text="Types" heading="Strength, Weightloss" />
          <DetailList text="Equipment" heading="Dumbbell, Bench" />
          <DetailList text="Muscles" heading="Chest, Biceps" />
          <Text textAlign="left" marginY="30px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
        <Image
          src="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
          height="500px"
          width="100%"
          maxWidth="600px"
          objectFit="cover"
          marginBottom="12px"
        />
      </Flex>
      <Heading textAlign="left" size="md" marginTop="40px">
        Check the description and video instructions of an exercise and start
        working out!
      </Heading>
      <Accordion marginTop="60px" defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionHeader>
            <Image
              src="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
              height="100px"
              objectFit="cover"
              paddingRight="50px"
            />
            <Box flex="1" textAlign="left">
              <Text>Reverse Lunges</Text>
              <Stack isInline spacing={8}>
                <Text>Left Leg</Text>
                <Text>0:40</Text>
              </Stack>
            </Box>

            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
            <Flex bg="#FFFCF2">
              <Text textAlign="left" maxWidth="50%">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              <Image
                src="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
                height="300px"
                width="100%"
                maxWidth="400px"
                objectFit="cover"
                marginBottom="12px"
              />
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <Image
              src="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
              height="100px"
              objectFit="cover"
              paddingRight="50px"
            />
            <Box flex="1" textAlign="left">
              <Text>Reverse Lunges</Text>
              <Stack isInline spacing={8}>
                <Text>Left Leg</Text>
                <Text>0:40</Text>
              </Stack>
            </Box>

            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
            <Flex bg="#FFFCF2">
              <Text textAlign="left" maxWidth="50%">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              <Image
                src="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
                height="300px"
                width="100%"
                maxWidth="400px"
                objectFit="cover"
                marginBottom="12px"
              />
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <Image
              src="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
              height="100px"
              objectFit="cover"
              paddingRight="50px"
            />
            <Box flex="1" textAlign="left">
              <Text>Reverse Lunges</Text>
              <Stack isInline spacing={8}>
                <Text>Left Leg</Text>
                <Text>0:40</Text>
              </Stack>
            </Box>

            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
            <Flex bg="#FFFCF2">
              <Text textAlign="left" maxWidth="50%">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              <Image
                src="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
                height="300px"
                width="100%"
                maxWidth="400px"
                objectFit="cover"
                marginBottom="12px"
              />
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default WorkoutDetail;

// export function WorkoutDetail2() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     client
//       .query({
//         query: GET_WORKOUT_DETAILS
//       })
//       .then(res => {
//         setData(res.data.workouts);
//         setIsLoading(false);
//       })
//       .catch(err => {
//         setIsLoading(false);
//         setError(true);
//       });
//   }, []);

//   if (isLoading) {
//     return (
//       <Box>
//         <Flex
//           width="100vw"
//           height="100vh"
//           justifyContent="center"
//           align="center"
//         >
//           <CustomSpinner thickness="6px" size="xl" text="Loading..." />
//         </Flex>
//       </Box>
//     );
//   }
//   return (
//     <Flex alignItems="start" justifyContent="space-around">
//       {/* {data.map(item => (
//         <DetailList key={item.id} data={data} />
//       ))} */}
//       <Box maxWidth="40%">
//         <SideTitle heading="Total Upper Body Strength Upper Body " />
//         <DetailList text="Average Time" heading="20 to 22 minutes" />
//         <DetailList text="Intensity" heading="Moderate" />
//         <DetailList text="Types" heading="Strength, Weightloss" />
//         <DetailList text="Equipment" heading="Dumbbell, Bench" />
//         <DetailList text="Muscles" heading="Chest, Biceps" />
//         <Text textAlign="left" marginY="30px">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Text>
//       </Box>
//       <Image
//         src="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
//         height="500px"
//         width="100%"
//         maxWidth="600px"
//         objectFit="cover"
//         bg="gray.100"
//         marginBottom="12px"
//       />
//     </Flex>
//   );
// }
