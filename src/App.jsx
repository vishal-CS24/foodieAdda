import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import About from "./pages/About";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Body from "./components/hfb/Body";
import RestaurantMenu from "./components/Menu/RestaurantMenu";
import LoginPage from "./pages/LoginPage";
const About = lazy(() => import("./pages/About"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home" element={<Body />} />
          <Route
            path="/home/about"
            element={
              <Suspense fallback={<h1>loading.....</h1>}>
                <About />
              </Suspense>
            }
          />
          <Route path="/home/contact" element={<Contact />} />
          <Route path="/home/restaurant/:id" element={<RestaurantMenu />} />
        </Route>
        <Route path="error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
