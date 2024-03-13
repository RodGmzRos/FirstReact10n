import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidV4} from 'uuid';

function App() {
  const [role,setRole]= useState('');
  const[employess,setEmployess]=useState(
    [
        {
          id:1,
          name:'Caleb',
          role:'Developer',
          img:'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
        },
        {
          id:2,
          name:'Maria',
          role:'Developer',
          img:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
        },
        {
          id:3,
          name:'Donna',
          role:'Developer',
          img:'https://images.pexels.com/photos/3760924/pexels-photo-3760924.jpeg',
        },
        {
          id:4,
          name:'Megan',
          role:'Developer',
          img:'https://images.pexels.com/photos/839633/pexels-photo-839633.jpeg',
        },
        {
          id:5,
          name:'Ahmed',
          role:'Developer',
          img:'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
        },
        {
          id:6,
          name:'Luke',
          role:'Developer',
          img:'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg',
        },
        {
          id:7,
          name:'Vermont',
          role:'Developer',
          img:'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg',
        },
    ]
  );

  //Creamos nuestra función updateEmployee
  function updateEmployee(id,newName,newRole){
    console.log('updateEmployee inside of App.js');
  }


  const showEmployees= true;
  return (
    <div className="App">
      {showEmployees ? (
        <>  
          <div class="flex flex-wrap justify-center">
              {employess.map((employee) =>{
                return(
                  <Employee
                    id={employee.id}
                    key={employee.id}        
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    updateEmployee={updateEmployee}
                  />
                );
              })} 
          </div>
        </>
       ) : (
        <p>You cannot see the emplooyes</p>
      )} 
    </div>
  );
}

export default App;
