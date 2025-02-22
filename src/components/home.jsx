import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg"; // Import background image

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full screen height
        width: "100vw",  // Full screen width
        textAlign: "center",
        px: { xs: 2, sm: 4, md: 6 }, // Responsive padding

        backgroundImage: `url(${bg})`, // Add background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay
        backgroundBlendMode: "darken",
        color: "white", // Ensure text is visible
      }}
    >
      <Typography 
        variant="h2" 
        sx={{ 
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive font size
          fontWeight: "bold",
        }}
      >
        Hi, I'm Akansha Bhagat
      </Typography>

      <Typography 
        variant="h5" 
        sx={{ 
          mt: 2, 
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
          maxWidth: "80%", // Keep text readable
        }}
      >
        Full Stack Developer | MERN Stack Developer | Backend Developer 
      </Typography>

      <Button 
        variant="contained" 
        color="primary" 
        sx={{ 
          mt: 4, 
          px: 4, 
          py: 1.5, 
          fontSize: { xs: "1rem", md: "1.2rem" } 
        }}
      >
        <Link 
          to="https://github.com/2000akansha" // Your GitHub profile
          style={{ textDecoration: "none", color: "white" }}
          target="_blank" // Open in new tab
          rel="noopener noreferrer"
        >
          Checkout my Github
        </Link>
      </Button>
    </Box>
  );
};

export default Home;
