import { useEffect } from "react";
import { Box, Typography, Divider,  } from "@mui/material";

const projects = [
    {
        title: "🏛 Property Tax Management System (Saharanpur Project)",
        description: "The property tax management system designed for efficient tax collection and digital finance solutions.",
        color: "#ff9800",
        hoverColor: "#ffb74d",
    },
    {
        title: "💰 BIDA Finance System",
        description: "A financial management system for government funds allocation and expenditure tracking in their internal team.",
        color: "#4caf50",
        hoverColor: "#66bb6a",
    },
    {
        title: "🌍 DAMS Project (Himachal Pradesh Govt)",
        description: "Developed a fund allocation system for government-acquired land, ensuring secure transactions and records management.",
        color: "#00bcd4",
        hoverColor: "#03a9f4",
    },
    {
        title: "🚀 Job Dekho (MERN Stack Project)",
        description: "A job search platform that connects employers and job seekers. Features job posting, and application tracking.",
        color: "#9c27b0",
        hoverColor: "#ba68c8",
    },
    {
        title: "⚕️ Health Assist (Product)",
        description: "A healthcare platform for personalized recommendations, appointment scheduling, and secure medical record management.",
        color: "#f50057",
        hoverColor: "#ff4081",
    },
    {
        title: "💸 E-BG (HDFC Project)",
        description: "Developed a secure electronic bank guarantee system for HDFC Bank, focusing on API security and fraud prevention.",
        color: "#ff5722",
        hoverColor: "#ff8a65",
    },
    {
        title: "🏠 Chandigarh Housing Board (Govt Project)",
        description: "Contributed to a digital housing management system, streamlining property allocation and financial transactions.",
        color: "#3f51b5",
        hoverColor: "#7986cb",
    }
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
                overflow: "auto", // Allow scrolling
                textAlign: "left",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": { width: "5px" },
                "&::-webkit-scrollbar-thumb": { backgroundColor: "#888", borderRadius: "10px" }
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
                    pl: { xs: 2, sm: 5, md: "10%" }
                }}
            >
                🔥 Projects
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto",
                    height: "calc(100vh - 100px)", // Ensures content scrolls till the end
                    px: { xs: 2, sm: 4, md: 8 },
                    pl: { xs: 2, sm: 5, md: "10%" },
                    scrollbarWidth: "thin",
                    "&::-webkit-scrollbar": { width: "5px" },
                    "&::-webkit-scrollbar-thumb": { backgroundColor: "#888", borderRadius: "10px" },
                }}
            >
                {projects.map((project, index) => (
                    <Box key={index} sx={{ mb: 4 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "4.5vw", sm: "2.5vw", md: "1.8rem" },
                                color: project.color,
                                mb: 1,
                                "&:hover": { color: project.hoverColor, transition: "0.3s" },
                            }}
                        >
                            {project.title}
                        </Typography>
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
                        {index !== projects.length - 1 && (
                            <Divider sx={{ backgroundColor: "#444", my: 3 }} />
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Projects;
