import Navbar from "./components/Test/Navbar"
import Test from "./components/Test/Test"
import { TestProvider } from "./components/Test/TestContext"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react'
import TestForm from "./components/Test/TestForm";
import Home from "./components/Test/Home";
import EditForm from "./components/Test/EditForm";

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
              <Route path="edit" element={<EditForm />} />
            </Route>

            <Route path="/login" element={<h1>Login</h1>} />
          </Routes>

        </TestProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
