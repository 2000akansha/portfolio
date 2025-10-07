import { Box, Typography, Button } from "@mui/material";
import { LinkedIn, Email } from "@mui/icons-material";
import Tilt from "react-parallax-tilt";
import bg from "../assets/bg.jpg";

const Contact = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
                textAlign: "center",
                px: { xs: 2, sm: 4, md: 6 },
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                backgroundBlendMode: "darken",
                color: "white",
                overflow: "hidden",
                position: "relative",
            }}
        >
            <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                style={{ zIndex: 2 }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                        fontWeight: "bold",
                        color: "#ff4081",
                        textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                        transition: "transform 0.3s",
                        "&:hover": {
                            transform: "scale(1.1)",
                        },
                    }}
                >
                    Hey, let&apos;s connect!
                </Typography>
            </Tilt>

            <Box
                sx={{
                    mt: 5,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 3,
                    zIndex: 2,
                }}
            >
                <Tilt
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    scale={1.1}
                    transitionSpeed={400}
                >
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
                            borderRadius: "30px",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
                            transition: "transform 0.3s, box-shadow 0.3s",
                            "&:hover": {
                                transform: "scale(1.1)",
                                boxShadow: "0 6px 25px rgba(0, 0, 0, 0.6)",
                            },
                        }}
                        component="a"
                        href="https://linkedin.com/in/akansha-bhagat-6972b9289"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedIn /> LinkedIn
                    </Button>
                </Tilt>

                <Tilt
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    scale={1.1}
                    transitionSpeed={400}
                >
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
                            borderRadius: "30px",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
                            transition: "transform 0.3s, box-shadow 0.3s",
                            "&:hover": {
                                transform: "scale(1.1)",
                                boxShadow: "0 6px 25px rgba(0, 0, 0, 0.6)",
                            },
                        }}
                        component="a"
                        href="mailto:bhagatakansha154@gmail.com"
                    >
                        <Email /> Email Me
                    </Button>
                </Tilt>
            </Box>

            {/* Optional: Add a slight animated overlay for extra vibes! */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(45deg, rgba(0,0,0,0.3) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.3) 75%)",
                    backgroundSize: "50px 50px",
                    animation: "moveBackground 5s linear infinite",
                    zIndex: 1,
                }}
            />

            <style>{`
                @keyframes moveBackground {
                    0% { background-position: 0 0; }
                    100% { background-position: 50px 50px; }
                }
            `}</style>
        </Box>
    );
};

export default Contact;
