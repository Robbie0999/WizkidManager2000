import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'react-bootstrap';
import Employees from '../../Employees';
import { Link, useNavigate } from 'react-router-dom';

// Import CSS
import './ContactList.css';
import '../root.css'

const ContactList = () => {

  // Functie wat values opslaat in de localstorage. Wanneer de button deze function called worden de values opgeslagen.
  const buttonEdit = (Id, Name, Role, Email, MobileNumber, ProfilePicture) => {
    localStorage.setItem('Name', Name);
    localStorage.setItem('Role', Role);
    localStorage.setItem('Email', Email);
    localStorage.setItem('MobileNumber', MobileNumber);
    localStorage.setItem('ProfilePicture', ProfilePicture)
    localStorage.setItem('Id', Id);
  }
  
  // Gebruik maken van 'useNavigate' (react-router-dom) wat wordt gecalled in the function 'deleteButton'. Dit refreshed de pagina wanneer een object uit een array wordt gehaald.
  let newPage = useNavigate();

  //Functie wat de id van een object verwijderd. De functie returned een array met alleen de id's, en selecteerd de id van het object die op 'delete' gekliktt is. Deze functie wordt gecalled in the button. Met splice wordt het object met de juiste id verwijderd uit de array.
  const buttonDelete = (id) => {
    let index = Employees.map(function(event){
      return event.Id
    }).indexOf(id)

    Employees.splice(index, 1);

    newPage('/');
  }

  return (

    <React.Fragment>
      <div className='contact-list-container' style={{margin: "15rem"}}>

        <h2>WizKid Manager 2000</h2>
        <p>Welcome to the Wizkid Manager 2000. With this tool you will be able to view, add and delete the employees of this amazing company. Try it out!</p>

        <div class="hr mb-4"></div>
       
       <Table striped bordered hover>
        <thead >
          <tr className='table-row'>
            <th className='table-cell'>
              Name
            </th>
            <th className='table-cell'>
              Role
            </th>
            <th className='table-cell'>
              Email
            </th>
            <th className='table-cell'>
              Mobile number
            </th>
            <th className='table-cell'> 
              Profile picture
            </th>
            <th className='table-cell'>
              Options
            </th>
          </tr>
        </thead>

        <tbody>
        {
            Employees && Employees.length > 0 ? Employees.map((item) => {
                return(
                  <tr key={[item.Name, item.Role, item.Email, item.MobileNumber, item.ProfilePicture]}>
                    <td className='table-cell'>
                      {item.Name}
                    </td>
                    <td className='table-cell'>
                      {item.Role}
                    </td>
                    <td className='table-cell'>
                      {item.Email}
                    </td>
                    <td className='table-cell'>
                      {item.MobileNumber}
                    </td>
                    <td className='table-cell'>
                      {item.ProfilePicture}
                      <img src={item.ProfilePicture} alt=""></img>
                    </td>
                    <td className='table-cell'>
                      <Link to={`/contacts/edit`}>
                        <button id="btn-styles2" onClick={() => buttonEdit(item.Id, item.Name, item.Role, item.Email, item.MobileNumber, item.ProfilePicture)}>Edit</button>
                      </Link>
                    &nbsp;
                    <button id="btn-styles2" onClick={() => buttonDelete(item.Id)}>Delete</button>
                    &nbsp;
                      <Link to={`/contacts/view`}>
                        <button id="btn-styles2" onClick={() => buttonEdit(item.Id, item.Name, item.Role, item.Email, item.MobileNumber, item.ProfilePicture)}>View</button>
                      </Link>
                    </td>
                  </tr>
                )
            })
            : ""
          }
        </tbody>
       </Table>
       <br />

        <Link to='/contacts/add'>
          <button id="btn-styles">Add</button>
        </Link>

      </div>
    </React.Fragment>
  )
}

export default ContactList;