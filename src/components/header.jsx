import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar 
      position="fixed"  
      sx={{ bgcolor: "#1E1E1E", top: 0, left: 0 }}  // Dark background & fixed position
    >
      <Toolbar sx={{ px: 1 }}>  {/* Padding for better spacing */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Beyond Code | Akansha Bhagat
        </Typography>
        <Link to="/portfolio" style={{ color: "white", marginRight: 20, textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "white", marginRight: 20, textDecoration: "none" }}>About</Link>
        <Link to="/projects" style={{ color: "white", marginRight: 20, textDecoration: "none" }}>Projects</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
