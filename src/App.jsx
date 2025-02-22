import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Projects from './components/projects'
import Contact from './components/contact'
const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensures full viewport height
        width: "100vw",
        overflowX: "auto", // Horizontal scroll only when needed
      }}
    >
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto", // Enables vertical scrolling only if needed
          overflowX: "hidden", // Prevents unnecessary horizontal scroll
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
