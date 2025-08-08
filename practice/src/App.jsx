import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import TodoApp from "./TodoApp";
import Home from "./component/Home";
function App() {
  return (
    <>
    <Router>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/todo">Todo App</Link>
      </li>
    </ul>
  </nav>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/todo" element={<TodoApp/>} />
  </Routes>
</Router>
    </>
  );
}
export default App;
