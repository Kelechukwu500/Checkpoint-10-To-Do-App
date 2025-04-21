import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1>To-Do Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
