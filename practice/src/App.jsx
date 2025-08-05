import React from 'react';
import Layout from './Layout';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Book from './component/Book';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element ={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="home" element ={<Home/>}></Route>
        <Route path="about" element ={<About/>}></Route>
        <Route path="contact" element ={<Contact/>}></Route>
        <Route path="book" element ={<Book/>}></Route>
        </Route>
      </Routes>
    </Router>
    </>
  );
}
export default App;
