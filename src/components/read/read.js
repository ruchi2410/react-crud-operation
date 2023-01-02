import React, { useEffect, useState }from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import { NavLink } from "react-router-dom";

const Read = () => {
  
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
     axios.get(`https://63b19bd30d51f5b2971b384b.mockapi.io/Crud`)
     .then((getData) => {
      setApiData(getData.data);
  })
 })

 const setData = (id, firstName, lastName) => {
  localStorage.setItem('ID', id)
  localStorage.setItem('firstName', firstName)
  localStorage.setItem('lastName', lastName)
}

const getData = () => {
  axios.get(`https://63b19bd30d51f5b2971b384b.mockapi.io/Crud`)
     .then((getData) => {
      setApiData(getData.data);
  })
}

const onDelete = (id) =>{
  axios.delete(`https://63b19bd30d51f5b2971b384b.mockapi.io/Crud/${id}`)
  .then(() => {
    getData();
  })
}
  return (
    <div>
     <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {apiData.map((data) => {
      return (
          <Table.Row>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>

              <Table.Cell>
              <NavLink to='/update'>
              <Button
              color="green"
              onClick={() => setData(data.id, data.firstName, data.lastName)}>
              Update
              </Button>
              </NavLink>
              </Table.Cell>

              <Table.Cell>
              <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
              </Table.Cell>
              </Table.Row>
          )
         })}

        </Table.Body>
      </Table>
    </div>
    )
}
export default Read
