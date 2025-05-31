import { useEffect } from "react";
import { Box, Typography, Divider, Link } from "@mui/material";
import Tilt from "react-parallax-tilt";

// 🔥 Import missing FontAwesome icons
import { FaUniversity, FaMoneyCheck, FaCity, FaBuilding, FaLandmark, FaHeartbeat, FaBriefcase, FaTasks } from "react-icons/fa";

const projects = [
    {
        title: "Hostel Management System (Bundelkhand University)",
        description: "Currently leading the full-stack development from scratch for Bundelkhand University...",
        icon: <FaUniversity size={30} className="text-blue-500" />,
        color: "#2196f3", // blue
        hoverColor: "#2196f3",
    },
    {
        title: "Loan Management Portal",
        description: "Led the complete architecture and backend development of a large-scale government loan management portal...",
        icon: <FaMoneyCheck size={30} className="text-green-500" />,
        color: "#4caf50", // green
        hoverColor: "#4caf50",
    },
    {
        title: "Property Tax Management System (U.P.)",
        description: "Digitized and automated the entire property tax process for U.P. state government...",
        icon: <FaCity size={30} className="text-purple-500" />,
        color: "#9c27b0", // purple
        hoverColor: "#9c27b0",
    },
    {
        title: "BIDA Finance Platform (Jhansi)",
        description: "Engineered secure RESTful APIs for dynamic fund allocation to infrastructure projects...",
        icon: <FaBuilding size={30} className="text-yellow-500" />,
        color: "#fbc02d", // yellow
        hoverColor: "#fbc02d",
        link: "https://finance.bida.co.in/login",
    },
    {
        title: "DLAMS (Himachal Pradesh)",
        description: "Developed APIs to digitize land acquisition...",
        icon: <FaLandmark size={30} className="text-red-500" />,
        color: "#f44336", // red
        hoverColor: "#f44336",
        link: "https://lamsgaggal.com/login",
    },
    {
        title: "Health Assist",
        description: "Developed some backend modules for real-time health analytics.",
        icon: <FaHeartbeat size={30} className="text-pink-500" />,
        color: "#e91e63", // pink
        hoverColor: "#e91e63",
        link: "https://thehealthassist.co/run/",
    },
    {
        title: "Job Dekho (Job Finder)",
        description: "A MERN stack portal for job seekers and employers...",
        icon: <FaBriefcase size={30} className="text-indigo-500" />,
        color: "#3f51b5", // indigo
        hoverColor: "#3f51b5",
        link: "https://jobdekho.in",
    },
    {
        title: "Queue Management",
        description: "A robust MERN stack project designed to handle and queue bulk tasks...",
        icon: <FaTasks size={30} className="text-orange-500" />,
        color: "#ff9800", // orange
        hoverColor: "#ff9800",
    },
];

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                width: "100vw",
                backgroundColor: "#121212",
                color: "white",
                paddingTop: "75px",
                overflow: "auto",
                textAlign: "left",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": { width: "5px" },
                "&::-webkit-scrollbar-thumb": { backgroundColor: "#888", borderRadius: "10px" },
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    mb: 3,
                    fontSize: { xs: "6vw", sm: "3.5vw", md: "2.2rem" },
                    color: "#ff4081",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    textAlign: "left",
                    pl: { xs: 2, sm: 5, md: "10%" },
                }}
            >
                🔥 Projects
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto",
                    height: "calc(100vh - 100px)",
                    px: { xs: 2, sm: 4, md: 8 },
                    pl: { xs: 2, sm: 5, md: "10%" },
                    scrollbarWidth: "thin",
                    "&::-webkit-scrollbar": { width: "5px" },
                    "&::-webkit-scrollbar-thumb": { backgroundColor: "#888", borderRadius: "10px" },
                }}
            >
                {projects.map((project, index) => (
                    <Tilt
                        key={index}
                        glareEnable={true}
                        glareMaxOpacity={0.2}
                        scale={1.05}
                        transitionSpeed={500}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        style={{ marginBottom: "2rem" }}
                    >
                        <Box
                            sx={{
                                p: 2,
                                borderRadius: "8px",
                                backgroundColor: "#1e1e1e",
                                transition: "transform 0.3s, background-color 0.3s",
                                "&:hover": {
                                    backgroundColor: project.hoverColor + "22", // faded hover color
                                },
                            }}
                        >
                            {/* 🔥 Icon */}
                            <Box sx={{ mb: 1 }}>{project.icon}</Box>

                            {/* 🔥 Title as link if it exists */}
                            {project.link ? (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="hover"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: { xs: "4.5vw", sm: "2.5vw", md: "1.8rem" },
                                        color: project.color,
                                        mb: 1,
                                        display: "inline-block",
                                    }}
                                >
                                    {project.title}
                                </Link>
                            ) : (
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: { xs: "4.5vw", sm: "2.5vw", md: "1.8rem" },
                                        color: project.color,
                                        mb: 1,
                                    }}
                                >
                                    {project.title}
                                </Typography>
                            )}

                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: { xs: "3vw", sm: "1.5vw", md: "1rem" },
                                    color: "#e0e0e0",
                                    textAlign: "justify",
                                    mb: 2,
                                }}
                            >
                                {project.description}
                            </Typography>

                            {index !== projects.length - 1 && <Divider sx={{ backgroundColor: "#444", my: 2 }} />}
                        </Box>
                    </Tilt>
                ))}
            </Box>
        </Box>
    );
};

export default Projects;
