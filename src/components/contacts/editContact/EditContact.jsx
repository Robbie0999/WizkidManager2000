import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from '../../Employees';
import { useNavigate } from 'react-router-dom';

// Import CSS
import './EditContact.css';
import '../root.css';

const EditContact = () => {

  // Hier worden de variable aangemaakt die als startwaarde een lege string hebben. Met deze React hook, en gebruik te maken van 'setName' bijvoorbeeld, kan de waarde van de variabele worden veranderd. Omdat dit een edit pagina is, wordt er ook opnieuw een Id aangemaakt.
  const[name, setName] = useState('');
  const[role, setRole] = useState('');
  const[email, setEmail] = useState('');
  const[mobileNumber, setMobileNumber] = useState('');
  const[profilePicture, setProfilePicture] = useState('');
  const[id, setId] = useState('');

  // 'useNavigate' hook vanuit react-router-dom gebruiken en in een variable zetten. Hook ophalen en linken naar een pagina.
  let newPage = useNavigate();

  // Functie wat een array returned met alleen de id's, en selecteerd de id van het object die op 'update' geklikt is. Deze functie wordt gecalled in the button. 
  let index = Employees.map(function(event){
    return event.Id
  }).indexOf(id);

  // Functie wat, ten eerste her herladen voorkomt (events object + methode), een unieke Id wordt gegeven aan een object wanneer deze wordt toegevoegd aan de employees array. Hierbij worden alleen de eerste 8 tekens gepakt. Vervolgens worden de variabele uit de useState gestopt in een andere veriabele en gepushed naar de array.
  const buttonSubmit = (event) => {
    event.preventDefault();

    let a = Employees[index];
    a.Name = name;
    a.Role = role;
    a.Email = email;
    a.MobileNumber = mobileNumber;
    a.ProfilePicture = profilePicture;

    newPage("/");
  }

  // Functie wat gebruik maakt van de React hook 'useEffect'. Dit helpt met het vastzetten van de staat van de value in een variabele. Vervolgens worden de verandere values (setName, etc.) opgehaald uit de lokale storage en in een lege array gezet. Dit haalt dus de values op uit de 'contactList' pagina en weergeeft het in deze pagina.
  useEffect(() =>{
    setName(localStorage.getItem('Name'))
    setRole(localStorage.getItem('Role'))
    setEmail(localStorage.getItem('Email'))
    setMobileNumber(localStorage.getItem('MobileNumber'))
    setProfilePicture(localStorage.getItem('ProfilePicture'))
    setId(localStorage.getItem('Id'))
  }, [])

  // Een form waarmee je een nieuwe employee kan toevoegen. Hierbij worden de variabele uit de useState gebruikt om een nieuwe value te geven.
  return <div>
      <Form style={{margin: "10rem", width:"30%"}} className='form-main'>

      <h2>Edit a Wizkid!</h2>
        
      <div class="hr mb-4"></div>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className='form-label'>Name</Form.Label>
          <Form.Control className='form-control' type="text" placeholder="Enter your name please"  required onChange={(event) => setName(event.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label className='form-label'>Role</Form.Label>
          <Form.Select className='form-select' aria-label="Default select example" required onChange={(event) => setRole(event.target.value)}>
            <option>Select a role please</option>
            <option value="CEO">CEO</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Intern">Intern</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='form-label'>Email</Form.Label>
          <Form.Control className='form-control' type="text" placeholder="Enter your email please" required onChange={(event) => setEmail(event.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMobileNumber">
          <Form.Label className='form-label'>MobileNumber</Form.Label>
          <Form.Control className='form-control' type="text" placeholder="Enter your mobile number please" required onChange={(event) => setMobileNumber(event.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label className='form-label'>ProfilePicture</Form.Label>
          <Form.Control className='form-control' type="file"  placeholder="Select an image please" required onChange={(event) => setProfilePicture(event.target.value)}/>
        </Form.Group>

        <button className='mt-3' id="btn-styles" onClick={(e) => buttonSubmit(e)}>Update</button>
      </Form>
  </div>
}

export default EditContact