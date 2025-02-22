import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { LinkedIn, Email } from "@mui/icons-material"; // Import Icons
import bg from "../assets/bg.jpg"; // Import background image

const Contact = () => {
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
                Hey, let's connect!
            </Typography>

            <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}>
                {/* LinkedIn Button */}
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                    component="a"
                    href="https://www.linkedin.com/in/akansha-b-6972b9289/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedIn /> LinkedIn
                </Button>

                {/* Gmail Button */}
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                    component="a"
                    href="mailto:bhagatakansha154@gmail.com"
                >
                    <Email /> Email Me
                </Button>
            </Box>
        </Box>
    );
};

export default Contact;
