import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

function Blogs() {

   const auth = useSelector(state=>state.reducer.isAuthenticated)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/blogs')
        .then(function (response) {
         setData(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }, [])
    
    console.log(auth)

    if (!auth) {
        return (<Navigate to={"/login"} />)
    }

    return (
        <TableContainer>
            <Table variant='simple'>

                <Thead>
                    <Tr>
                        <Th>title</Th>
                        <Th>author</Th>
                        <Th>publication</Th>
                        <Th>published_on</Th>

                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map(({id, title,author,publication, published_on})=>
                    <Tr key={id}>
                <Td>{title}</Td>
                    <Td>{author}</Td>
                    <Td>{publication}</Td>
                    <Td>{published_on}</Td>
                    </Tr>)
                }
                </Tbody>
              
            </Table>
        </TableContainer>


    )
}

export default Blogs