import React from "react";
import MainPage from "./pages/MainPage";
import WorkPage from "./pages/WorkPage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./redux/actions/todos";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="wrapper">
      <>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/todos" element={<WorkPage />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
