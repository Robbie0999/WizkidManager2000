// Importing libraries
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from 'react-bootstrap';
import Employees from '../../Employees';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

// Importing CSS
import './AddContact.css'
import '../root.css'

const AddContact = () => {

  // Gebruik maken van 'useNavigate' (react-router-dom) wat wordt gecalled in the function 'deleteButton'. Dit refreshed de pagina wanneer een object uit een array wordt gehaald.
  let newPage = useNavigate();

  // Hier worden de variable aangemaakt die als startwaarde een lege string hebben. Met deze React hook, en gebruik te maken van 'setValue' kan de waarde van de variabele worden veranderd.
  const[name, setName] = useState('');
  const[role, setRole] = useState('');
  const[email, setEmail] = useState('');
  const[mobileNumber, setMobileNumber] = useState('');
  const[profilePicture, setProfilePicture] = useState('');

// Functie wat checked of input in form is ingevuld. 
  // const formValidation = () => {
  //   if(name.length === 0) {
  //     alert('Invalid form, name cannot be empty');
  //     return;
  //   }
  //   if(role.length === 0){
  //     alert('Invalid form role cannot be empty');
  //     return;
  //   }
  //   if(email.length === 0){
  //     alert('Invalid form, email cannot be empty');
  //     return
  //   }
  //   if(mobileNumber.length === 0){
  //     alert('Invalid form, mobile number cannot be empty');
  //     return;
  //   } 
  //   if(profilePicture.length === 0){
  //     alert('Invalid form, profile picture cannot be empty');
  //     return;
  //   }
  // }

  // Functie waarbij een unieke Id wordt gegeven aan een object wanneer deze wordt toegevoegd aan de employees array. Hierbij worden alleen de eerste 8 tekens gepakt. Vervolgens worden de variabele uit de useState gestopt in een andere veriabele en gepushed naar de array.
  const buttonSubmit = (event) => {

    // Zorgt ervoor dat de page niet refreshed.
    event.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
    b = role,
    c = email,
    d = mobileNumber,
    e = profilePicture

    Employees.push({Id: uniqueId, Name: a, Role: b, Email: c, MobileNumber: d, ProfilePicture: e })

    newPage('/')
  }

  // Een form waarmee je een nieuwe employee kan toevoegen. Hierbij worden de variabele uit de useState gebruikt om een nieuwe value te geven.
  return <div>
      <Form style={{margin: "10rem", width:"30%"}} className='form-main'>

        <h2>Add a Wizkid!</h2>
        
        <div class="hr mb-4"></div>
      
        <Form.Group className="mb-3 from-group-styles" controlId="formBasicName">
          <Form.Label className='form-label'>Name:</Form.Label>
          <Form.Control className='form-control' type="text" placeholder="Enter your name please"  required onChange={(event) => setName(event.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Role:</Form.Label>
          <Form.Select className='form-select' aria-label="Default select example" required onChange={(event) => setRole(event.target.value)}>
            <option className='form-select'>Select a role please</option>
            <option value="CEO">CEO</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Intern">Intern</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control className='form-control' type="text" placeholder="Enter your email please" required onChange={(event) => setEmail(event.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMobileNumber">
          <Form.Label>Mobile number:</Form.Label>
          <Form.Control className='form-control' type="text" placeholder="Enter your mobile number please" required onChange={(event) => setMobileNumber(event.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Profile picture:</Form.Label>
          <Form.Control className='form-control' type="file"  placeholder="Select an image please" required onChange={(event) => setProfilePicture(event.target.value)}/>
        </Form.Group>

        <button className='mt-3' id="btn-styles" onClick={(e) => buttonSubmit(e)}>Submit</button>

      </Form>
  </div>
}

export default AddContact;