import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Button, FormControl, FormLabel, Input, Heading } from '@chakra-ui/react';
import axios from '../http'; 
import useAuth from '../hooks/useAuth';

const EditDispenser = () => {
    const [ingredient, setingredient] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
    const { machineId, dispenserId } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      

      try {
        const response = await axios.put(`/api/dispensers/${dispenserId}`, { ingredient, quantity });
        if (response.status === 200) {
          navigate(`/machines/${machineId}`); 
        }
      } catch (err) {
        setError('Invalid email or password');
      }
    };


    return (
      <Box bg="#020817" color="white" minHeight="100vh">
        <Box p={4} margin={"auto"} width={"50%"}>
          <Heading as="h2" size="lg" mb={4}>Edit Dispenser</Heading>
          {error && <Box color="red.500" mb={4}>{error}</Box>} {/* Display error message */}
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Ingredient:</FormLabel>
              <Input type="text" value={ingredient} onChange={(e) => setingredient(e.target.value)} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Quantity:</FormLabel>
              <Input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="teal">Edit</Button>
          </form>
        </Box>
      </Box>
    );
}

export default EditDispenser