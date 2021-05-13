import React, { useState, createContext, useEffect } from "react";
import MyToDoList from "./pages/todolist";

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
    </div>
  );
}

export default App;
