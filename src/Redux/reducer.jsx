const taskReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, description: action.payload.description }
          : task
      );
    default:
      return state;
  }
};

export default taskReducer;
