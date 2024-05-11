import "./App.css";
import Home from "./Components/Home";
import DailyUniverse from "./Components/DailyUniverse";
import { useEffect, useState } from "react";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { useRoutes, BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import Mars from "./Components/MarsRover";

function App() {
  // return (
  //   <div className="App">
  //     <Home />
  //     {console.log("data is ", data)}
  //     {data && <DailyUniverse data={data} />}
  //   </div>
  // );

  const routes = (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/daily" element={<DailyUniverse />} />
      <Route path="/Mars" element={<Mars />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="w-full h-screen flex flex-col">{routes}</div>
      </AuthProvider>
    </BrowserRouter>
  );
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/signup" element={<SignUp />} />
  //     <Route path="/login" element={<Login />} />
  //   </Routes>
  // </BrowserRouter>
}

export default App;
