import DispenserManager from "../components/DispenserManager";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "../http";
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

  if (machines.length === 0)
    return (
      <Box
        className="loader-container"
        flex={1}
        bgColor={"#000000"}
        display={"flex"}
        justifyContent={"center"}
      >
        <svg viewBox="0 0 400 160">
          <text
            x="50%"
            y="50%"
            dy=".32em"
            textAnchor="middle"
            className="text-body"
          >
            Epicure
          </text>
          <text
            x="50%"
            y="50%"
            dy=".32em"
            dx="1.8em"
            textAnchor="middle"
            className="text-body"
          >
            .
          </text>
        </svg>
      </Box>
    );
  return (
    <>
      <Box flex={1} bg="#000000" color="white">
        <Box
          p={4}
          display={"flex"}
          flexDir={"column"}
          width={"100%"}
        >
          <Heading margin={"0 auto"} as="h2" size="lg" mb={4}>
            Dashboard
          </Heading>
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            width={"100%"}
            gap={"20px"}
          >
            {machines.map((machine, id) => (
              <Box
                key={id}
                p={4}
                width={["100%", "45%"]}
                bg="#6EE7B7"
                color={"#000000"}
                borderRadius="lg"
                textAlign="center"
              >
                <Link to={`/machines/${machine._id}`} key={machine._id}>
                  <Text fontSize="xl" mb={2}>
                    <b>{machine.name}</b>
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
