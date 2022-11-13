import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { useTranslation } from "react-i18next";
import ThemeButton from "./ThemeButton";
// import { deleteDoc, doc } from "firebase/firestore";
// import { db } from "../firebase";

const Chat = () => {
  const { data } = useContext(ChatContext);

  const { t, i18n } = useTranslation();

  

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  // const handleClick = async (user) => {
  //   const chatId = doc(db, "chats", user);
  //    await deleteDoc(chatId);
  //  };   

  

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="userInfo">
          <img src={data.user.photoURL} alt="" />
          <span>{data.user?.displayName}</span>
        </div>
        <div className="button">
          <button  className="buttonWrapper"
            onClick={() =>
              i18n.language === "en"
                ? changeLanguage("tr")
                : changeLanguage("en")
            }
          >
            {t("change_language")}
          </button>
          {/* <button className="buttonWrapper">
              <span
                key={data.chatId}
                onClick={() => handleClick(data.chatId)}
                class="material-symbols-outlined"
              >
                delete
              </span>
          </button> */}
        </div>
          <ThemeButton />
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
