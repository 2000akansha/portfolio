import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/portfolio";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "auto",
      }}
    >
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          overflowX: "hidden",
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
          <Route path="/" element={<Home />} />
           <Route path="/portfolio" element={<Home />} />  {/* ← add this */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
