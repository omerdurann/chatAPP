import React from 'react'
import Logo from "../img/deneme2.png"

const Login = () => {
  return (
    <div className= 'formContainer'>
        <div className= 'formWrapper'>
        <img className='logo' src={Logo} alt="Logo" />
            <span className='title'>Kayıt Ol</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                
                <button>Giriş Yap</button>
            </form>
            <p>Henüz bir hesabınız yok mu? Üye Ol</p>
        </div>
    </div>
  )
}

export default  Login
