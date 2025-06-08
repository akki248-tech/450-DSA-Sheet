// import React, { useState } from 'react';
// import {
//   Box, Button, Input, FormControl, FormLabel, Heading, VStack, useToast
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const toast = useToast();
// const navigate = useNavigate();

//   const handleLogin = () => {
//     if (email === 'aarushi459@gmail.com' && password === 'a@rushi123') {
//       toast({
//         title: 'Login Successful',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
//       setTimeout(() => {
//         navigate('/dsa');
//       }, 1000);
//       // Redirect ya state update yahan karein
//     } else {
//       toast({
//         title: 'Invalid Credentials',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="md">
//       <Heading mb={6} textAlign="center">Login</Heading>
//       <VStack spacing={4}>
//         <FormControl id="email">
//           <FormLabel>Email address</FormLabel>
//           <Input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter email"
//           />
//         </FormControl>
//         <FormControl id="password">
//           <FormLabel>Password</FormLabel>
//           <Input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//           />
//         </FormControl>
//         <Button colorScheme="teal" width="full" onClick={handleLogin}>
//           Login
//         </Button>
//       </VStack>
//     </Box>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  useToast,
  Text,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'aarushit459@gmail.com' && password === 'a@rushi123') {
      toast({
        title: 'Login Successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate('/dsa');
      }, 1000);
    } else {
      toast({
        title: 'Invalid Credentials',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, teal.400, blue.500)"
      px={4}
    >
      <MotionBox
        bg="white"
        p={8}
        rounded="2xl"
        boxShadow="2xl"
        w="full"
        maxW="md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Heading mb={6} textAlign="center" color="teal.500">
          Welcome 
        </Heading>
        <VStack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                variant="filled"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  colorScheme="teal"
                  variant="ghost"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            colorScheme="teal"
            size="lg"
            width="full"
            onClick={handleLogin}
            _hover={{ bg: 'teal.600' }}
          >
            Login
          </Button>
        </VStack>
        
      </MotionBox>
    </Box>
  );
};

export default Login;
