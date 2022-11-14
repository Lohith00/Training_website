import React, { useState, useEffect } from 'react';
import './App.css';

// ***** Import Router and Route
import { Routes, Route, Outlet } from 'react-router-dom'


// ***** Importer Components
import Studenlogin from './components/Studenlogin';
import Signup from './components/StudentSignup';
import Homepage from './components/Homepage';
import Syllabus1 from './components/syllabus';
import Enroll from './components/Enroll';
import Payment from './components/payment';







function App() {

  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])

  const getValue = (contact) =>{ // getting value from child to parent
    setContacts([...contacts, contact]);
  }

  // Grab value from the local storage
  useEffect(() => {
    const variable1 = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(variable1)setContacts(variable1)
    // console.log(contacts)
    
  },[]);

  //Store value into the local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    
  },[contacts])


  
  return (
    // className="App"
    
    <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='login' element={<Studenlogin />}/>
        <Route path='signup' element={<Signup getValue = {getValue}/>}/>
        <Route path='syllabus' element={<Syllabus1 />} />
          <Route path='enroll' element={<Enroll  /> } />
        
        <Route path='payment' element={<Payment />} />
    </Routes>
    // <Syllabus1 />
    // <Enroll />
    // <Payment />

  );
}

export default App;
