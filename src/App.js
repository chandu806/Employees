import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar"
import { Routes, Route } from "react-router-dom"
import {Login} from "./Components/Login"
import {Register} from "./Components/Register"
import {Employees} from "./Components/Employees"

function App() {
  return (
    <div className="App">
     <Navbar />
       <Routes>
         <Route path='/' />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/employees" element={<Employees />} />
         <Route path="/employees/:id" element={<Employees />} />
       </Routes>
    </div>
  );
}

export default App;
