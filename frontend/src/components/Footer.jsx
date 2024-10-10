import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box display={"flex"} width={"100%"} justifyContent={"center"} bg="#000000" color="white" p={4} textAlign="center">
      <Text>&copy; 2024 Epicure. All rights reserved.</Text>
    </Box>
  );
}
