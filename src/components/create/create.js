import { React, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom';


const Create = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  console.log(firstName);
  console.log(lastName);
  
  const sendDataToAPI = () => {
    axios.post(`https://63b19bd30d51f5b2971b384b.mockapi.io/Crud`,{
      firstName,
      lastName
    }).then(() => {
      navigate('/read')
    })
  }
  return (
    <div>
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input name="fname" 
        onChange={(e) => setFirstName(e.target.value)} 
        placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input 
        name="lname" 
        placeholder='Last Name' 
        onChange={(e) => setLastName(e.target.value)} 
        />
      </Form.Field>
      <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
    </Form>
  </div>
)
}
     

export default Create
