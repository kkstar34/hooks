
import './App.css';
import { useState } from 'react';

function App() {
  
  const [students, setStudents] = useState([{
    id: 1,
    name : 'John',
    email : 'john@example.com'
  },
{
    id: 2,
    name : 'Kouyate',
    email : 'kouyate@example.com'
  },
  {
    id: 3,
    name : 'Coulibaly',
    email : 'coulibaly@example.com'
  }




])

const [name, setName] = useState("");
const [email, setEmail] = useState("");

function addStudent() {

  let student = {
    id : 6,
    name : name,
    email : email,
  }

  let newStudents = [...students];

  newStudents.push(student);

  setStudents(newStudents);


}


function typing(e){
  setName(e.target.value);
}


function typingEmail(e){
  setEmail(e.target.value);
}




  return (
    <div className="App">
      <div>
        <input type="text" onChange={typing}/>
        <input type="text" onChange={typingEmail}/>
        <button onClick={addStudent}>Ajouter</button>
      </div>

      {students.map(student => {
        return <div>
           <h1>Name :{student.name}</h1>
           <p>Email : {student.email}</p>
        </div>
      })}
     
    </div>
  );
}

export default App;
