import { Box, Flex, HStack, Link, Button } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Importing the useAuth hook

export default function Navbar() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user');
        navigate("/");
    }

  return (
    <Box position={"relative"} bg="#020817" p={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Link as={RouterLink} to="/" fontSize="xl" color="white">
          Epicure Dashboard
        </Link>
        <HStack spacing={4}>
          {/* <Link as={RouterLink} to="/" color="white">Dashboard</Link> */}
          {!localStorage.getItem('user') && <Link as={RouterLink} to="/login" color="white">Login</Link>}
          {localStorage.getItem('user') && (
            <>
              {/* <Link as={RouterLink} to="/dispensers" color="white">Dispensers</Link> */}
              <Button colorScheme="red" onClick={logout}>Logout</Button>
            </>
          )}
        </HStack>
      </Flex>
    </Box>
  );
}
