import Navbar from "./components/Test/Navbar"
import Test from "./components/Test/Test"
import { TestProvider } from "./components/Test/TestContext"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react'
import TestForm from "./components/Test/TestForm";
import Home from "./components/Test/Home";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <TestProvider>

          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Test />} />
              <Route path="allnotes" element={<Test />} />
              <Route path="newnote" element={<TestForm />} />
              <Route path="about" element={<h1>About</h1>} />

            </Route>

            <Route path="/login" element={<h1>Login</h1>} />
          </Routes>

        </TestProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
