import Home from "./pages/Home";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import TeamHierarchy from "./pages/TeamHierarchy";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/blogs/:id" element={<BlogDetail/>} />
            <Route path="/team" element={<TeamHierarchy/>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
