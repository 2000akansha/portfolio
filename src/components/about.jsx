import { Box, Typography, Divider, Fade, Slide, List, ListItem } from "@mui/material";
import { useEffect, useState } from "react";

const About = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations on mount
        setLoaded(true);
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100vw",
                textAlign: "left",
                px: { xs: 2, sm: 4, md: 8 },
                pl: { xs: 2, sm: 5, md: "10%" },
                backgroundColor: "#121212",
                color: "white",
                overflowX: "hidden",
                pt: "94px",
                pb: "50px", // padding for footer space
            }}
        >
            {/* Dynamic Title */}
            <Slide in={loaded} direction="down" timeout={700}>
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: { xs: "4vw", sm: "2.5vw", md: "1.8rem" },
                        mb: 2,
                        color: "#00bcd4",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.05)",
                            color: "#1de9b6",
                        },
                    }}
                >
                    Executive - Full Stack (Heavy Backend) Developer | Node.js Backend Developer
                </Typography>
            </Slide>

            {/* About Text */}
            <Fade in={loaded} timeout={1000}>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "3.5vw", sm: "2vw", md: "1.1rem" },
                        maxWidth: "85%",
                        textAlign: "justify",
                        mb: 3,
                        lineHeight: 1.6,
                    }}
                >
                    I am Akansha Bhagat, an experienced Full Stack (Heavy Backend) Developer with a strong
                    background in government projects, software testing, and maintaining security protocols.
                    I specialize in building scalable, secure, and user-friendly applications that solve
                    real-world challenges.
                    <br /><br />
                    Currently, I am working as an Executive - Full Stack (Heavy Backend) Developer at
                    Innobles Smart Technologies Pvt Ltd, leading projects focused on digital finance,
                    documentation, property tax systems, and fund allocation systems. I specialize in the MERN
                    stack (MongoDB, Express.js, React.js, Node.js), delivering applications that meet
                    government standards while ensuring high performance and security.
                </Typography>
            </Fade>

            {/* Experience Section */}
            <Fade in={loaded} timeout={1200}>
                <Box sx={{ textAlign: "left", maxWidth: "80%", mt: 2 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "4vw", sm: "2.2vw", md: "1.5rem" },
                            color: "#00bcd4",
                            mb: 1,
                            transition: "transform 0.3s ease",
                            "&:hover": {
                                transform: "translateX(5px)",
                                color: "#1de9b6",
                            },
                        }}
                    >
                        🚀 Executive - Full Stack Developer (Sep 2024 — Present)
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: "3.5vw", sm: "2vw", md: "1rem" } }}
                    >
                        <strong>Innobles Smart Technologies Pvt Ltd, New Delhi</strong>
                        <List sx={{ pl: 2 }}>
                            <ListItem>Working on government projects like <strong>DAMS</strong> and <strong>BIDA</strong>.</ListItem>
                            <ListItem>Developing secure digital finance, documentation, and fund allocation systems.</ListItem>
                            <ListItem>Building scalable and user-focused applications compliant with government regulations.</ListItem>
                            <ListItem>Ensuring high efficiency and security throughout the development lifecycle.</ListItem>
                        </List>
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "4vw", sm: "2.2vw", md: "1.5rem" },
                            color: "#00bcd4",
                            mt: 2,
                            transition: "transform 0.3s ease",
                            "&:hover": {
                                transform: "translateX(5px)",
                                color: "#1de9b6",
                            },
                        }}
                    >
                        🛠 Associate Software Test Engineer (May 2022 — Sep 2023)
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: "3.5vw", sm: "2vw", md: "1rem" } }}
                    >
                        <strong>Axia Health Assist Tech Pvt Ltd, New Delhi</strong>
                        <List sx={{ pl: 2 }}>
                            <ListItem>Developed and executed test plans for various software applications.</ListItem>
                            <ListItem>Conducted detailed software defect analysis, identifying root causes and solutions.</ListItem>
                            <ListItem>Collaborated with cross-functional teams to troubleshoot and resolve critical application issues.</ListItem>
                        </List>
                    </Typography>
                </Box>
            </Fade>

            {/* Cybersecurity Interest */}
            <Fade in={loaded} timeout={1500}>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "3.5vw", sm: "2vw", md: "1.1rem" },
                        maxWidth: "85%",
                        textAlign: "justify",
                        mt: 3,
                        lineHeight: 1.6,
                    }}
                >
                    In addition to my development experience, I have a strong interest in cybersecurity,
                    focusing on encryption, firewall management, and secure data communication, network management.
                </Typography>
            </Fade>

            <Divider sx={{ width: "50%", backgroundColor: "gray", my: 3 }} />

            {/* Skills Section */}
            <Fade in={loaded} timeout={1700}>
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: { xs: "4vw", sm: "2.5vw", md: "1.5rem" },
                        fontWeight: "bold",
                        mt: 2,
                        color: "#00bcd4",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.05)",
                            color: "#1de9b6",
                        },
                    }}
                >
                    My Technical Skills
                </Typography>
            </Fade>

            <Slide in={loaded} direction="up" timeout={1900}>
                <Box sx={{ textAlign: "left", maxWidth: "80%", mt: 2 }}>
                    <List sx={{ pl: 2, fontSize: "1rem" }}>
                        <ListItem>💻 Full Stack Development: MERN Stack (MongoDB, Express.js, React.js, Node.js)</ListItem>
                        <ListItem>🎨 Frontend (Light): React.js, Material-UI</ListItem>
                        <ListItem>🛠 Backend(Heavy): Node.js, Express.js</ListItem>
                        <ListItem>💾 Database Management: MongoDB, SQL</ListItem>
                        <ListItem>🔐 Security & Authentication: JWT, OAuth, Data-Tampering Prevention</ListItem>
                        <ListItem>📡 Networking & APIs: RESTful APIs, Payment Gateway Integration</ListItem>
                        <ListItem>📝 Project Management: Git, GitHub</ListItem>
                    </List>
                </Box>
            </Slide>

            <Fade in={loaded} timeout={2000}>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "3.5vw", sm: "2vw", md: "1.1rem" },
                        maxWidth: "85%",
                        textAlign: "justify",
                        mt: 3,
                        lineHeight: 1.6,
                    }}
                >
                    I am always eager to explore new technologies and collaborate on challenging projects that
                    drive innovation and impact.
                </Typography>
            </Fade>
        </Box>
    );
};

export default About;
