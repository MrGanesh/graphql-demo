import React from "react";
import "./style.css";
import UseCustomQueryHook from "./UseCustomQueryHook"
import Characters from "./Characters"
// import {Routes, Route} from "react-router"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route exact path="/" element={<UseCustomQueryHook/>} />
          <Route exact path="/:id" element={<Characters/>} />
        </Routes>
      </Router>
    </div>
  );
}
