import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { DataProvider } from "./context/data.context";

function App() {
  return (
    <>
    <DataProvider>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
      </DataProvider>
    </>
  );
}

export default App;
