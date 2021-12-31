import React, {useState} from 'react';
import Header from './Header';


function App() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    school: ''
  });

  function handleChange(event){
    const {value, name} = event.target;
    setContact((prevValue) => {
     return{
      ...prevValue,
      [name]: value
     }
    })

  }



  return (
    <div >
        <Header />
      <div className='cv'>
        <h2> Name: {contact.name} </h2>
        <h2> Email: {contact.email} </h2>
        <h2> Phone: {contact.phone} </h2>
        <h2> Work: {contact.work}</h2>
        <h2> School: {contact.school}</h2>
        </div>

        <form action="" className="App">
         
          <input 
          type="text" 
          name="name" 
          value={contact.name}
          onChange={handleChange} 
          placeholder='Name' />

          <input 
          type="text" 
          name="email" 
          value={contact.email} 
          onChange={handleChange} 
          placeholder='email'/>

          <input 
          type="text" 
          name="phone" 
          value={contact.phone}
          onChange={handleChange}
          placeholder='phone' />

          <input 
          type="text" 
          name="work"
          value={contact.work}
          onChange={handleChange} 
          placeholder='work' />

          <input 
          type="text" 
          name="school" 
          value={contact.school}
          onChange={handleChange}
          placeholder='school' />

        </form>

    </div>

  );
}

export default App;
