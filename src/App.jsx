import Home from "./pages/Home";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import TeamHierarchy from "./pages/TeamHierarchy";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/team" element={<TeamHierarchy/>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
