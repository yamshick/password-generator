import { useState } from "react";
import Checkbox from "./components/checkbox";
import "./app.css";
export const App = () => {
  const [password, setPassword] = useState({
    length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  return (
    <div className="wrapper">
      <div className="container wrapper-box">
        <h2>Password Generator</h2>
        <div className="password-box">
          <input
            type="text"
            // value={handelText}
            placeholder=""
            autoComplete="off"
            // onChange={(e) => setHandelText(e.target.value)}
          />
          <button
            className="copy-button"
            // onClick={() => {
            //   if (handelText.length > 0) {
            //     navigator.clipboard.writeText(handelText);
            //     setCopied(true);
            //     setInterval(() => {
            //       setCopied(false);
            //     }, 2000);
            //   }
            // }}
          >
            {/*{copied ? "Copied!" : "Copy text"}*/}
          </button>
        </div>
        <br />
        <div className="word-crieteria__box">
          <div>
            <label>Password length</label>
          </div>
          <div>
            <input
              type="number"
              min="4"
              max="20"
              // value={passwordGen.length}
              // onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>
        </div>
        <div className="word-crieteria__box">
          <div>
            <label>Include uppercase letters</label>
          </div>
          <div>
            <Checkbox
              value={password.uppercase}
              onChange={handelChangeUppercase}
              // value={passwordGen.uppercase}
              // onChange={handleChangeUppercase}
            />
          </div>
        </div>
        <div className="word-crieteria__box">
          <div>
            <label>Include lowercase letters</label>
          </div>
          <div>
            <Checkbox
              value={password.lowercase}
              onChange={handelChangeLowercase}
              // value={passwordGen.lowercase}
              // onChange={handleChangeLowercase}
            />
          </div>
        </div>
        <div className="word-crieteria__box">
          <div>
            <label>Include numbers</label>
          </div>
          <div>
            <Checkbox
              value={password.numbers}
              onChange={handelChangeNumbers}
              // value={passwordGen.numbers}
              // onChange={handleChangeNumbers}
            />
          </div>
        </div>
        <div className="word-crieteria__box">
          <div>
            <label>Include symbols</label>
          </div>
          <div>
            <Checkbox
              value={password.symbols}
              onChange={handelChangeSymbols}
              // value={passwordGen.symbols}
              // onChange={handleChangeSymbols}
            />
          </div>
        </div>
        <div>
          <button
            className="generate-button"
            // onClick={generatePassword}
          >
            Generate password
          </button>
        </div>
      </div>
    </div>
  );
};
