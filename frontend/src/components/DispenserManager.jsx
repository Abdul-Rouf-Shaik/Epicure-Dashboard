import React, { useState, useEffect } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "../http";
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';

const DispenserManager = ({ machineId }) => {
  const [dispensers, setDispensers] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();


  useEffect(() => {
    const fetchDispensers = async () => {
      const response = await axios.get(`/api/dispensers/${machineId}`);
      setDispensers(response.data);
    };
    fetchDispensers();
  }, [machineId]);

  const handleDelete = (id) => {
    if(user?.isAdmin) {
      // axios.delete(`/api/dispensers/${id}`);
      setDispensers((prev) => prev.filter((d) => d._id !== id));
      navigate(`/machines/${machineId}`)
    } else {
      alert('You are not admin')
    }
  };

  const handleEdit = (machineId, dispenserId) => {
    if(user?.isAdmin) {
      navigate(`/machines/${machineId}/dispensers/${dispenserId}/edit`);
    } else {
      alert('You are not admin');
    }
  };

  return (
    <Box my={10}>
      <Heading size="md" mb={4}>
        Dispenser Management
      </Heading>
      <Table variant="striped" colorScheme="">
        <Thead>
          <Tr>
            <Th>Ingredient</Th>
            <Th>Quantity</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dispensers.map((dispenser) => (
            <Tr key={dispenser._id}>
              <Td>{dispenser.ingredient}</Td>
              <Td>{dispenser.quantity}</Td>
              <Td>
                {/* <Link as={RouterLink} to={`/machines/${machineId}/dispensers/${dispenser._id}/edit`}> */}
                  <Button size="sm" onClick={() => handleEdit(machineId, dispenser._id)} colorScheme="yellow" mr={2}>
                    Edit
                  </Button>
                {/* </Link> */}
                <Link as={RouterLink}>
                  <Button
                    size="sm"
                    colorScheme="red"
                    onClick={() => handleDelete(dispenser._id)}
                  >
                    Delete
                  </Button>
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DispenserManager;
