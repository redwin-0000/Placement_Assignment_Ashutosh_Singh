import { useState } from "react";
import "./App.css";

const App = () => {
  const [expression, setExpression] = useState("");
  const [error, setError] = useState("");
  const evalExpression = () => {
    try {
      setExpression(eval(expression));
      setError("");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="mainContainer">
      <div className="calContainer">
        <div className="inputContainer">
          <input
            type="text"
            name=""
            id=""
            className="input"
            value={expression}
          />
          <button className="inputBtn" onClick={() => setExpression("")}>
            C
          </button>
        </div>
        <div className="errorBox">{error}</div>
        <div className="calLayout">
          <div className="calBtnContainer">
            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "1");
              }}
            >
              1
            </button>
            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "2");
              }}
            >
              2
            </button>
            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "3");
              }}
            >
              3
            </button>
            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "4");
              }}
            >
              4
            </button>
            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "5");
              }}
            >
              5
            </button>
          </div>
          <div className="calBtnContainer">
            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "6");
              }}
            >
              6
            </button>
            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "7");
              }}
            >
              7
            </button>
            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "8");
              }}
            >
              8
            </button>
            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "9");
              }}
            >
              9
            </button>
            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "0");
              }}
            >
              0
            </button>
          </div>
          <div className="calBtnContainer">
            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "+");
              }}
            >
              +
            </button>
            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "-");
              }}
            >
              -
            </button>
            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "*");
              }}
            >
              *
            </button>

            <button
              className="calBtn"
              onClick={() => {
                setExpression((p) => p + "/");
              }}
            >
              /
            </button>
            <button
              className="calBtn"
              onClick={() => {
                if (expression) {
                  setExpression((p) => p.slice(0, p.length - 1));
                }
              }}
            >
              del
            </button>
            <button className="calBtn" onClick={() => evalExpression()}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
