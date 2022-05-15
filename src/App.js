import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Edit from "./Components/Edit";

function App() {
  return (
    <Router>
    <div className="App">
    <header><h2>Student Information Management</h2></header>
    <main>
     <Routes>
       <Route path="/" exact element={<Home />}/>
       <Route path="/edit/:id" exact element={<Edit />} />
     </Routes>
    </main>
     <footer></footer> 
    </div>
    </Router>
  );
}

export default App;
