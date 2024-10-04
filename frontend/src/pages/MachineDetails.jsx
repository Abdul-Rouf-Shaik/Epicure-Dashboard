import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import DispenserManager from '../components/DispenserManager';
import RecipeManager from '../components/RecipeManager';

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


  if (!machine) return <Text>Loading...</Text>;

  return (
    <Box p={6} bg="#020817" color="white" minHeight={"100vh"}>
      <Heading>{machine.name}</Heading>
      <Text>Status: {machine.sensorStatus || "Defective"}</Text>
      <Text>Temperature: {machine.temperature}</Text>
      <DispenserManager machineId={machineId} />
      <RecipeManager machineId={machineId} />
    </Box>
  );
};

export default MachineDetails;
