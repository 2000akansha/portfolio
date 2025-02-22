import { Box, Typography, Divider } from "@mui/material";

const About = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                minHeight: "100vh",
                width: "100vw",
                textAlign: "left",
                px: { xs: 2, sm: 4, md: 8 },
                pl: { xs: 2, sm: 5, md: "10%" },
                backgroundColor: "#121212",
                color: "white",
                overflowY: "scroll",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { width: "0px" },
                paddingTop: "94px", // Push content below the header
            }}

        >

            <Typography
                variant="h5"
                sx={{
                    fontSize: { xs: "4vw", sm: "2.5vw", md: "1.8rem" },
                    mb: 2,
                    color: "#00bcd4"
                }}
            >
                Executive - Full Stack (Heavy Backend) Developer | Node.js Backend Developer
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: "3.5vw", sm: "2vw", md: "1.1rem" },
                    maxWidth: "85%",
                    textAlign: "justify",
                }}
            >
                I am Akansha Bhagat, an experienced Full Stack (Heavy Backend) Developer with a strong background in government projects, software testing, and maintaining security protocols. I specialize in building scalable, secure, and user-friendly applications that solve real-world challenges.
                <br /><br />
                Currently, I am working as an Executive - Full Stack (Heavy Backend) Developer at Innobles Smart Technologies Pvt Ltd, leading projects focused on digital finance, documentation, property tax systems, and fund allocation systems. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), delivering applications that meet government standards while ensuring high performance and security.
            </Typography>

            {/* Experience Section */}
            
            <Box sx={{ textAlign: "left", maxWidth: "80%", mt: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, fontSize: { xs: "4vw", sm: "2.2vw", md: "1.5rem" ,                    color: "#00bcd4"
} }}>
                    🚀 Executive - Full Stack Developer (Sep 2024 — Present)
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: "3.5vw", sm: "2vw", md: "1rem" } }}>
                    <strong>Innobles Smart Technologies Pvt Ltd, New Delhi</strong>
                    <ul>
                        <li>Working on government projects like <strong>DAMS (Himachal Pradesh)</strong> and <strong>BIDA (Jhansi)</strong>.</li>
                        <li>Developing secure digital finance, documentation, and fund allocation systems.</li>
                        <li>Building scalable and user-focused applications compliant with government regulations.</li>
                        <li>Ensuring high efficiency and security throughout the development lifecycle.</li>
                    </ul>
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, fontSize: { xs: "4vw", sm: "2.2vw", md: "1.5rem" ,                    color: "#00bcd4"
} }}>
                    🛠 Associate Software Test Engineer (May 2022 — Sep 2023)
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: "3.5vw", sm: "2vw", md: "1rem" } }}>
                    <strong>Axia Health Assist Tech Pvt Ltd, New Delhi</strong>
                    <ul>
                        <li>Developed and executed test plans for various software applications.</li>
                        <li>Conducted detailed software defect analysis, identifying root causes and solutions.</li>
                        <li>Collaborated with cross-functional teams to troubleshoot and resolve critical application issues.</li>
                    </ul>
                </Typography>
            </Box>

            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: "3.5vw", sm: "2vw", md: "1.1rem" },
                    maxWidth: "85%",
                    textAlign: "justify",
                    mt: 3,
                }}
            >
                In addition to my development experience, I have a strong interest in cybersecurity, focusing on encryption, firewall management, and secure data communication, network management .
            </Typography>

            <Divider sx={{ width: "50%", backgroundColor: "gray", my: 3 }} />

            {/* Skills Section */}
            <Typography
                variant="h5"
                sx={{
                    fontSize: { xs: "4vw", sm: "2.5vw", md: "1.5rem" },
                    fontWeight: "bold",
                    mt: 2,
                }}
            >
                My Technical Skills
            </Typography>

            <Box sx={{ textAlign: "left", maxWidth: "80%", mt: 2 }}>
                <ul style={{ fontSize: "1rem", listStylePosition: "inside" }}>
                    <li>💻 Full Stack Development: MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                    <li>🎨 Frontend (Light): React.js, Material-UI</li>
                    <li>🛠 Backend(Heavy): Node.js, Express.js</li>
                    <li>💾 Database Management: MongoDB, SQL</li>
                    <li>🔐 Security & Authentication: JWT, OAuth, Data-Tampering Prevention</li>
                    <li>📡 Networking & APIs: RESTful APIs,Payment Gateway Integration</li>
                    <li>📝 Project Management: Git, GitHub</li>
                </ul>
            </Box>

            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: "3.5vw", sm: "2vw", md: "1.1rem" },
                    maxWidth: "85%",
                    textAlign: "justify",
                    mt: 3,
                }}
            >
                I am always eager to explore new technologies and collaborate on challenging projects that drive innovation and impact.
            </Typography>
        </Box>
    );
};

export default About;
