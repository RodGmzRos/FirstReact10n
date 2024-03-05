import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role,setRole]= useState('');
  const showEmployees= true;
  return (
    <div className="App">
      {showEmployees ? (
        <>  
          <input type="text" onChange={(e) => {
              console.log(e.target.value)
              setRole(e.target.value)
            }}/>
            
          <Employee name="Caleb" role="TI Analyst"/>
          <Employee name="Abby" role={role}/>
        </>
       ) : (
        <p>You cannot see the emplooyes</p>
      )} 
    </div>
  );
}

export default App;
