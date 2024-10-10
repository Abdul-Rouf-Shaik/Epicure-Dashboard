import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import axios from "../http";
import DispenserManager from "../components/DispenserManager";
import RecipeManager from "../components/RecipeManager";

const MachineDetails = () => {
  const { machineId } = useParams();
  const [machine, setMachine] = useState(null);

  useEffect(() => {
    const fetchMachineDetails = async () => {
      const response = await axios.get(`/api/machines/${machineId}`);
      setMachine(response.data);
    };
    fetchMachineDetails();
  }, [machineId]);

  if (!machine)
    // return <Text bgColor={"#000000"} my={"auto"} textAlign={"center"} color={"#fff"} flex={1}>Loading...</Text>;
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
    <Box flex={1} p={6} bg="#000000" color="white" minHeight={"100vh"}>
      <Heading>{machine.name}</Heading>
      <Text>Status: {machine.sensorStatus || "Defective"}</Text>
      <Text>Temperature: {machine.temperature}</Text>
      <DispenserManager machineId={machineId} />
      <RecipeManager machineId={machineId} />
    </Box>
  );
};

export default MachineDetails;
