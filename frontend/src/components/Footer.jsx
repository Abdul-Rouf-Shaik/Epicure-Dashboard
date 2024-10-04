// import React from 'react';
// import { Box, Text } from '@chakra-ui/react';

// const Footer = () => (
//   <Box bg="#1b2431" py={4} mt={4} textAlign="center" color="white">
//     <Text>© 2024 Epicure Robotics - Admin Dashboard</Text>
//   </Box>
// );

// export default Footer;


import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box display={"flex"} width={"100%"} justifyContent={"center"} bg="#020817" color="white" p={4} textAlign="center">
      <Text>&copy; 2024 Epicure. All rights reserved.</Text>
    </Box>
  );
}
