
import './App.css'
import SignInMain from "./pages/sign-in page/SignInMain.tsx";
import {createBrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";


const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignInMain />
  }
])

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInMain />} />
    </Routes>
  )
}

export default App
