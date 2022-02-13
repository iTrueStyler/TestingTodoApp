const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {

    case "SET_TODOS":
     let slicedState = [...action.payload].slice(0,20);
      return slicedState;

    case "CLEAN_TODO":
      return [...state.filter((el) => el.id !== action.payload)];

    case "ADD_TODO":
      const newObj = { ...action.payload };
      return [newObj, ...state];

    case "UPDATE_TODO":
      let findedElement = state.find((el) => el.id === action.id);
      let indexfindedElement = [...state].indexOf(findedElement);
      let newStateForUpdate = [...state];

      if (indexfindedElement !== -1) {
        newStateForUpdate[indexfindedElement].title = action.payload;
      }
      return newStateForUpdate;

    case "COMPLETE_TODO":
      let findElement = state.find((el) => el.id === action.payload);
      let index = [...state].indexOf(findElement);
      let newState = [...state];
      if (index !== -1) {
        newState[index].completed =
          newState[index].completed === true ? false : true;
      }
      return newState;

    default:
      break;
  }
  return state;
};

export default todos;
