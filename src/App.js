import React, { useState, createContext, useEffect } from "react";
import MyToDoList from "./pages/todolist";
import MyList from "./pages/home";
import { Provider } from "react-redux";
import store from "./models/store"
export const Context = createContext();

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      name: "Rico",
      date: new Date().getMonth(),
    });
  }, []);
  return (
    <div className="App">
      <Context.Provider value={data}>
        <MyToDoList />
      </Context.Provider>

      <Provider store={store}>
        <MyList />
      </Provider>
    </div>
  );
}

export default App;
