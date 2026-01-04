import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import MyPath from "./pages/myPath";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import Book from "./pages/Book";
import Details from "./pages/Details";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/mypath" element={<MyPath />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/Book" element={<Book/>} />
      <Route path="/details" element={<Details/>} />
      
    </Routes>
  );
}