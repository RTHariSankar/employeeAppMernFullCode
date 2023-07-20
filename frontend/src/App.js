import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div>
     <BrowserRouter>
     
     <Routes>

      <Route path = '/' element = {<Login/>} />
      <Route path = '/signup' element = {<Register/>} />
      <Route path = '/home' element = {<Home/>} />


     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;


