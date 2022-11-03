import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Add from "../img/ico2.png"
import Logo from "../img/deneme2.png"

const Register = () => {

  const handleSubmit = (e)=> {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
      //Signed in
      const user = userCredential.user;
      
      console.log(user)
      //..
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      //..
    });
  }



  return (
    <div className= 'formContainer'>
        <div className= 'formWrapper'>
            <img className='logo' src={Logo} alt="Logo" />
            <span className='title'>Kayıt Ol</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Profil resmi ekleyin</span>
                </label>
                <button>Üye Ol</button>
            </form>
            <p>Bir hesabınız var mı? Giriş Yap</p>
        </div>
    </div>
  )
}

export default Register
