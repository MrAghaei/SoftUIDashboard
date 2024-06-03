
import './App.css'
import SignInMain from "./pages/sign-in page/SignInMain.tsx";
import {createBrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Sidebar from "./components/Sidebar.tsx";


const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignInMain />
  }
])

function App() {
  return (
      <>
        <Sidebar/>
        <Routes>
          <Route path="/signin" element={<SignInMain />} />
        </Routes>
      </>

  )
}

export default App
