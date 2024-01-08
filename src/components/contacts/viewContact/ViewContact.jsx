import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'react-bootstrap';
import Employees from '../../Employees';
import { Link, useNavigate } from 'react-router-dom';

// Import CSS
import './ViewContact.css';
import '../root.css';

const ViewContact = () => {
  
  const buttonEdit = (Id, Name, Role, Email, MobileNumber) => {
    localStorage.setItem('Name', Name);
    localStorage.setItem('Role', Role);
    localStorage.setItem('Email', Email);
    localStorage.setItem('MobileNumber', MobileNumber);
    localStorage.setItem('Id', Id);
  }

  let newPage = useNavigate();

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

      {
        Employees && Employees.length < 0 ? Employees.map((item) => {
          return (
            <h2 key={item.Name}>This is {item.Name}</h2>
          )
        })
        : "hallo"
      }
  
      <div class="hr mb-4"></div>
      
      <Table striped bordered hover>
      <thead>
          <tr>
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
              MobileNumber
            </th>
            <th className='table-cell'>
              ProfilePicture
            </th>
            <th className='table-cell'>
              Id
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
                    </td>
                    <td className='table-cell'>
                    <Link to={`/contacts/edit`}>
                        <button id="btn-styles2" onClick={() => buttonEdit(item.Id, item.Name, item.Role, item.Email, item.MobileNumber)}>Edit</button>
                      </Link>
                    &nbsp;
                    <button id="btn-styles2" onClick={() => buttonDelete(item.Id)}>Delete</button>
                    </td>
                  </tr>
                )
            })
            : ""
          }
        </tbody>
      </Table>
      <br />

      <Link to='/contacts/list'>
          <button id="btn-styles" >Back</button>
        </Link>

      </div>
    </React.Fragment>
  )
}

export default ViewContact