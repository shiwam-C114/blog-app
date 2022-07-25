import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();
  return (
    <>
    <Button onClick={()=>{navigate("blogs")}}>Goto listing Page</Button>
    </>
  )
}

export default Home