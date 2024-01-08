import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';

// Import components
import ContactList from "./components/contacts/contactList/ContactList";
import AddContact from "./components/contacts/addContact/AddContact";
import ViewContact from "./components/contacts/viewContact/ViewContact";
import EditContact from "./components/contacts/editContact/EditContact";

const App = () => {
  return (
   <React.Fragment>
    <Routes>
      <Route path={'/'} element={<Navigate to={'/contacts/list'} /> } />
      <Route path={'/contacts/list'} element={<ContactList />} />
      <Route path={'/contacts/add'} element={<AddContact />} />
      <Route path={'/contacts/view'} element={<ViewContact />} />
      <Route path={'/contacts/edit'} element={<EditContact />} />
    </Routes>
   </React.Fragment>
  );
}

export default App;
