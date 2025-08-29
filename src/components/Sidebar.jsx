import React, { useContext, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { LuSquareActivity } from "react-icons/lu";
import { Context } from "../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <IoMdMenu
          size="20px"
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
        />
        <div className="new-chat">
          <IoMdAdd size="20px" onClick={() => newChat()} />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <FaRegMessage size="20px" />
                  <p> {item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <FaQuestionCircle size="20px" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <LuSquareActivity size="20px" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <IoSettingsSharp size="20px" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
