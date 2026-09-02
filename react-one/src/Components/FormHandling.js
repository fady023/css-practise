import React, { useState } from 'react'
import "../Styles/form.css"

function FormHandling() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const formsubmit = ()=>{
  let h = document.querySelector("h1");
  h.innerHTML = user.name + "  " + user.email + " " + user.password
  }
    return (
      <div>

        <form onSubmit={(e)=>{e.preventDefault();formsubmit();}}>
          <h2>form handling</h2>
          <input type='text' value={user.name} placeholder='username' onChange={(e) => { setuser({...user, name: e.target.value }) }} ></input>
          <input type='email' value={user.email} placeholder='email' onChange={(e) => { setuser({...user, email: e.target.value }) }} ></input>
          <input type='password' value={user.password} placeholder='password' onChange={(e) => { setuser({...user, password: e.target.value }) }} ></input>
          <button type='submit' name='btn'>Submit</button>
        </form>
        <h1></h1>
      </div>
    );

}
export default FormHandling
