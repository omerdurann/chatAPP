import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Logo from "../img/deneme2.png";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img className="logo" src={Logo} alt="Logo" />
        <span className="title">Giriş Yap</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Giriş Yap</button>
          {err && <span>Bir şeyler yanlış gitti..</span>}
          
        </form>
        <p>
          Henüz bir hesabınız yok mu? <Link to="/register">Üye Ol</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
