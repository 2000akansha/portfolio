import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg";
import { motion } from "framer-motion";
import { useEffect } from "react";

// Handle parallax movement
const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  const x = (clientX / window.innerWidth - 0.5) * 50; // adjust depth range
  const y = (clientY / window.innerHeight - 0.5) * 50;
  const layers = document.querySelectorAll(".layer");

  layers.forEach((layer, index) => {
    const depth = (index + 1) * 10;
    layer.style.transform = `translate3d(${x / depth}px, ${y / depth}px, ${depth}px)`;
  });
};

const Home = () => {
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Box
      sx={{
        perspective: "1000px",
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      {/* Background layer */}
      <Box
        className="layer"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
          filter: "brightness(0.6)",
          transform: "translateZ(-10px)",
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Gradient overlay layer */}
      <Box
        className="layer"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: "linear-gradient(120deg, rgba(0, 0, 0, 0.3), rgba(255, 0, 150, 0.2), rgba(0, 200, 255, 0.3))",
          animation: "gradientShift 10s ease infinite",
          zIndex: 2,
          transform: "translateZ(0px)",
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Content layer */}
      <Box
        className="layer"
        sx={{
          zIndex: 3,
          textAlign: "center",
          transform: "translateZ(20px)",
          transition: "transform 0.1s ease-out",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              fontWeight: "bold",
              textShadow: "0 0 10px rgba(0,0,0,0.8)",
            }}
          >
            Hi, I am Akansha Bhagat
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typography
            variant="h5"
            sx={{
              mt: 2,
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
              maxWidth: "80%",
              textShadow: "0 0 5px rgba(0,0,0,0.6)",
            }}
          >
            Full Stack Developer | MERN Stack Developer | Backend Developer
          </Typography>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 4,
              px: 4,
              py: 1.5,
              fontSize: { xs: "1rem", md: "1.2rem" },
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
              "&:hover": {
                background: "linear-gradient(45deg, #ff0099, #493240)",
                boxShadow: "0 20px 40px rgba(255, 0, 150, 0.6)",
                transform: "scale(1.1) translateZ(30px)",
              },
              transform: "translateZ(10px)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <Link
              to="https://github.com/2000akansha"
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Checkout my Github
            </Link>
          </Button>
        </motion.div>
      </Box>

      {/* Keyframe animations for gradient */}
      <style>
        {`
          @keyframes gradientShift {
            0% { filter: hue-rotate(0deg) blur(0px); }
            50% { filter: hue-rotate(180deg) blur(4px); }
            100% { filter: hue-rotate(360deg) blur(0px); }
          }
        `}
      </style>
    </Box>
  );
};

export default Home;
