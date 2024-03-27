import "./App.css";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"
import RestaurantMenu from "./components/RestaurantMenu"
function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home />} >
        <Route path='/' element={<Body/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu/>}/>
       </Route>
        <Route path="error" element={<Error/>}/>
        <Route path="*" element={<Navigate to="/error"/>} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
