import { action as preAction } from "../utils/constants";
function todoReducer(state, action) {
  switch (action.type) {
    case preAction.ADDTODO:
      return [...state, action.payload];
    case preAction.GETTODO:
      return [...state];
    case preAction.REMOVETODO:
      return [...state.filter((e) => e.id !== action.payload.id)];
    case preAction.UPDATETODO:
      console.log(action.payload);
      return [
        ...state.map((e) =>
          e.id == action.payload.id
            ? { id: e.id, text: action.payload.text }
            : e
        ),
      ];
  }
}

export default todoReducer;
