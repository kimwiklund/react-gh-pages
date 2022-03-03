import ReactDom from "react-dom";
import {BrowserRouter,Switch, Route, Routes} from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";

export default function App() { 
  return (
    <BrowserRouter basename="/react-gh-pages">
    <Routes>    
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="cv" element={<Cv />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};
