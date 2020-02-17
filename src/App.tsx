import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ListUsers from "./components/ListUsers";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header name="Team Inspired" />
        <UserInput />
        <br />
        <ListUsers />
      </div>
    </Provider>
  );
}

export default App;
