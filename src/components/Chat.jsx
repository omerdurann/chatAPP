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
        <span>{data.user?.displayName}</span>
        <div className="button">
          <button onClick={() => changeLanguage("en") || changeLanguage("tr")}>
            {t("change_language")}
          </button>
          <button>{t("change_font")}</button>
          <button>{t("change_theme")}</button>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
