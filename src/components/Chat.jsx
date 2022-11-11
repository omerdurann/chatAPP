import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { useTranslation } from "react-i18next";

const Chat = () => {
  const { data } = useContext(ChatContext);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="userInfo">
          <img src={data.user.photoURL} alt="" />
          <span>{data.user?.displayName}</span>
        </div>
        <div className="button">
          <button
            onClick={() =>
              i18n.language === "en"
                ? changeLanguage("tr")
                : changeLanguage("en")
            }
          >
            {t("change_language")}
          </button>
          <button>{t("change_theme")}</button>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
