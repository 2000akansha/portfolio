import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const linkStyle = {
    color: "white",
    marginRight: 20,
    textDecoration: "none",
    display: "inline-block",
    transition: "transform 0.3s ease",
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#1E1E1E", top: 0, left: 0 }}>
      <Toolbar sx={{ px: 1 }}>
        {/* Make the Title Clickable */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ flexGrow: 1 }}
        >
          <Link to="/portfolio" style={{ ...linkStyle, fontSize: "1.25rem", fontWeight: "bold" }}>
            Beyond Code | Akansha Bhagat
          </Link>
        </motion.div>

        {/* Navigation Links with 3D Hover */}
        {[
          { label: "Home", to: "/portfolio" },
          { label: "About", to: "/about" },
          { label: "Projects", to: "/projects" },
          { label: "Contact", to: "/contact" },
        ].map((link) => (
          <motion.div
            key={link.label}
            whileHover={{ rotateY: 10, rotateX: 5 }}
            style={{ display: "inline-block" }}
          >
            <Link to={link.to} style={linkStyle}>
              {link.label}
            </Link>
          </motion.div>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
