import React, { useContext } from "react";
import { FaUserSecret } from "react-icons/fa";
import { IoCompassOutline } from "react-icons/io5";
import { AiOutlineBulb } from "react-icons/ai";
import { FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FcGallery } from "react-icons/fc";
import { IoMicOutline } from "react-icons/io5";
import { LuSendHorizontal } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { Context } from "../context/context";

const Body = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="body">
      <div className="nav">
        <p>GeminiSiri</p>
        <FaUserSecret />
      </div>

      <div className="body-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello,Satyam.</span>
              </p>
              <p>How can I help you today</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <IoCompassOutline size="30px"  />
              </div>

              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <AiOutlineBulb size="30px" />
              </div>

              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <FaRegMessage size="30px" />
              </div>

              <div className="card">
                <p>Improve the readability of the following code</p>
                <FaCode size="30px" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <FaUserSecret size="20px" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <BsStars size="30px" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="body-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <FcGallery size="30px" />
              <IoMicOutline size="30px" />
              {input ? (
                <LuSendHorizontal onClick={() => onSent()} size="30px" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            GeminiSiri may display inaccurate info,including about people, so
            double-check its responses. Your privacy and GeminiSiri Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
