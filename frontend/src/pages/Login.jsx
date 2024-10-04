import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Button, FormControl, FormLabel, Input, Heading } from '@chakra-ui/react';
import axios from 'axios'; // Ensure you have axios installed
import useAuth from '../hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate(); // Create navigate function



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/users/login', { email, password });
      if (response.status === 200) {
        login();
        const userData = response.data.user;
        localStorage.setItem('user', JSON.stringify(userData))
        navigate('/'); 
      }
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  useEffect(() => {
    if(localStorage.getItem('user')) {
      navigate('/');
    }
  })

  return (
    <Box bg="#020817" color="white" minHeight="100vh">
      <Box p={4} margin={"auto"} width={"50%"}>
        <Heading as="h2" size="lg" mb={4}>Login</Heading>
        {error && <Box color="red.500" mb={4}>{error}</Box>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel>Email:</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Password:</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="teal">Login</Button>
        </form>
      </Box>
    </Box>
  );
}
