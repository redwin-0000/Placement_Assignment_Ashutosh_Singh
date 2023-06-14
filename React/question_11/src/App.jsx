import { useReducer, useState } from "react";
import "./App.css";
import todoReducer from "./reducer/todoReducer";
import { action } from "./utils/constants";
const App = () => {
  const [state, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  const id = Date.now();

  const editHandler = (e) => {
    console.log(e);
    const value = prompt("Enter modified text", e.text);
    if (value.trim() != "") {
      dispatch({
        type: action.UPDATETODO,
        payload: { id: e.id, text: value },
      });
    }
  };

  return (
    <div className="mainContainer">
      <div className="todoContainer">
        <div className="inputContainer">
          <input
            type="text"
            className="input"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className="addBtn"
            onClick={() => {
              if (input) {
                dispatch({
                  type: action.ADDTODO,
                  payload: {
                    text: input,
                    id: id,
                  },
                });
                setInput("");
              }
            }}
          >
            Add
          </button>
        </div>
        <div className="todoList">
          {state.length == 0 ? (
            <>
              <div className="emptyContainer">
                <h1>No todo exist</h1>
              </div>
            </>
          ) : (
            <>
              {state.map((e, i) => {
                return (
                  <div key={i} className="todoItem">
                    <h1>{e.text}</h1>
                    <div className="btn-cont">
                      <button
                        className="btn-dlt"
                        onClick={() => {
                          dispatch({
                            type: action.REMOVETODO,
                            payload: e,
                          });
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn-edt"
                        onClick={() => editHandler(e)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
