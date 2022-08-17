import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import {loginValidation} from "../../validations/loginValidation"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./styles/login.css";
// import { tokenContext } from "../../context/tokenContext";
import {createContext} from "react";


function Login () {
  const [errorsYup, setErrorsYup] = useState([]);
  const [singleError, setsingleError] = useState([]);
  const [dataseter, setdataseter] = useState([]);

  const navigation = useNavigate();

const [loginform,setLoginform]=useState({
  email: "",
  password: "",
})


  const handlechange=(e)=>{
    setLoginform({
      ...loginform,
      [e.target.name]: e.target.value,
      
    });
  }

  const handlesubmit= async(e)=>{
    e.preventDefault();

    try{
     await  loginValidation.validate(loginform, { abortEarly: false });
      axios.post("http://localhost:20201/api/login",loginform)
     .then((result) => {
      setLoginform({
        email:" ",
        password:" "
       })   
       setdataseter(result.data)
     
       Cookies.set("usert",result.data,{expires:1})
      console.log(result.data)   }).then(()=>{
        
        setErrorsYup(null);
        setsingleError("")      
       }).catch((err) => {
        if (err.response.status === 404) {
          console.log(err.response.data.message)
          setErrorsYup([]);

          setsingleError(err.response.data.message)
          setLoginform({
            email:" ",
            password:" "
           }) 
        }
      }).finally(()=>{
        
        setErrorsYup([]);

      })
     

    } catch(e){
      
    // console.log(e);
    console.log(e.inner);
    setErrorsYup(e.inner);
   
  }
     
  }
 
  return (
    <div  className='formLoginsection'>

<h1 className='headerLogin'></h1>

<div>
  
  <section className='formsectionInput'>
    
  <form onSubmit={handlesubmit}>
    <div>
      
      <input placeholder='Inter Username'   value={loginform.email} onChange={handlechange} type="text" name="email" id="" />
    </div>
    <div>
    
      <input  placeholder='Inrer Password'   value={loginform.password} onChange={handlechange} type="text" name="password" id="" />
    </div><button>Submit</button>
  </form>
  
      </section>
      {
errorsYup.map((prg,index) => (
            <p key={index} className="errorLogin"><span style={{color:'red'}}>*</span>{prg.message}</p>
          ))}
                    <p className='errorLoginserver'>{singleError}</p>

</div>

  
    </div>
  )
}

export default Login
