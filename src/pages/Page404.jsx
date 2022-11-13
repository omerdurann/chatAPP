import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "../img/deneme2.png";
import err404 from "../img/err404.png";

const Page404 = () => {
  const { t } = useTranslation();

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img className="logo" src={Logo} alt="Logo" />
        <img className="err" src={err404} alt="err" />

        <p>
          {t("err")} <Link to="/register">{t("register")}</Link>
        </p>
      </div>
    </div>
  );
};

export default Page404;
