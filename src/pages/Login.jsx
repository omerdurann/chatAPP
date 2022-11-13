import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Logo from "../img/deneme2.png";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        <span className="title">{t("login")}</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>{t("login")}</button>
          {err && <span>{t("err")}</span>}
        </form>
        <p>
          {t("not_account")} <Link to="/register">{t("register")}</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
