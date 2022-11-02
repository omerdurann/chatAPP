import React from 'react'
import Add from "../img/ico2.png"
import Logo from "../img/deneme2.png"

const Register = () => {
  return (
    <div className= 'formContainer'>
        <div className= 'formWrapper'>
            <img className='logo' src={Logo} alt="Logo" />
            <span className='title'>Kayıt Ol</span>
            <form>
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
