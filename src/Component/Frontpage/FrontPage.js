import Login from './Login';
import Register from './Register';
import React , { useState, useEffect } from 'react';
import '../../Assets/Css/FrontPage.css';

function FrontPage() {

  const [ currentForm, setCurrentForm ] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="FrontPage">
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default FrontPage;
