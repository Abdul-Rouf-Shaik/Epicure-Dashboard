import DispenserManager from "../components/DispenserManager";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    const fetchMachines = async () => {
      const response = await axios.get("/api/machines");
      setMachines(response.data);
    };
    fetchMachines();
  }, []);
  return (
    <>
      <Box bg="#020817" width={""} color="white">
        <Box
          p={4}
          // bgColor={"green"}
          minHeight={"100vh"}
          display={"flex"}
          flexDir={"column"}
        //   alignItems={"center"}
          width={"100%"}
        >
          <Heading margin={"0 auto"} as="h2" size="lg" mb={4}>
            Dashboard
          </Heading>
          {/* <Grid templateColumns="repeat(auto-fill, minmax(500px, 1fr))" gap={6}>
          {machines.map((machine) => (
            <Link to={`/machines/${machine._id}`} key={machine._id}>
              <GridItem p={4} bg="#1b2431" borderRadius="lg" textAlign="center">
                <Text fontSize="xl" mb={2}>
                  {machine.name}
                </Text>
                <Text>Status: {machine.sensorStatus || "Operational"}</Text>
              </GridItem>
            </Link>
          ))}
        </Grid> */}
          <Box
            //   backgroundColor={"yellow"}
            display={"flex"}
            flexWrap={"wrap"}
            // alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            gap={"20px"}
          >
            {machines.map((machine, id) => (
              <Box
                key={id}
                p={4}
                width={"45%"}
                bg="#1b2431"
                borderRadius="lg"
                textAlign="center"
              >
                <Link to={`/machines/${machine._id}`} key={machine._id}>
                  <Text fontSize="xl" mb={2}>
                    {machine.name}
                  </Text>
                  <Text>Status: {machine.sensorStatus || "Operational"}</Text>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
