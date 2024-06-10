
import './App.css'
import SignInMain from "./pages/sign-in page/SignInMain.tsx";
import {createBrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import ProjectsMain from "./pages/Projects/ProjectsMain.tsx";


const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignInMain />
  }
])

function App() {
  return (
      <>
        <Routes>
          <Route path="/signin" element={<SignInMain />} />
            <Route path='/profile/projects' element={<ProjectsMain/>}/>
        </Routes>
      </>

  )
}

export default App
