import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/reducer';

  
  export default function Login() {
    const n = useNavigate()
    const dispatch = useDispatch()
    const [loginData, setLoginData] = useState({email:"",password:""})
    function tryLogin() {
        axios.post('https://reqres.in/api/login', {
           ...loginData
          })
          .then(function (response) {
            if (response.data.token) {
                dispatch(login())
                n("/blogs")
            }
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
        setLoginData(values => ({...values, [name]: value}))
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>log in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input name='email' value={loginData.email} onChange={handleChange} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input name='password' value={loginData.password} onChange={handleChange} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Text color={'blue.400'}>email: eve.holt@reqres.in</Text> 
                </Stack>
                <Button
                onClick={tryLogin}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }