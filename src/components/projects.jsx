import { Box, Typography, Divider } from "@mui/material";

const Projects = () => {
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
                overflowY: "auto",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": { width: "5px" },
                "&::-webkit-scrollbar-thumb": { backgroundColor: "#888", borderRadius: "10px" },
                paddingTop: "75px",
            }}
        >
            {/* 🔥 Projects Heading */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    mb: 3,
                    fontSize: { xs: "6vw", sm: "3.5vw", md: "2.2rem" },
                    color: "#ff4081",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                }}
            >
                🔥 Projects
            </Typography>

            <Box sx={{ textAlign: "left", maxWidth: "80%", mt: 2 }}>
                {/* 🏛 Property Tax Management System */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "4.5vw", sm: "2.5vw", md: "1.8rem" },
                        color: "#ff9800",
                        mb: 1,
                        "&:hover": { color: "#ffb74d", transition: "0.3s" },
                    }}
                >
                    🏛 Property Tax Management System (Saharanpur Project)
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
                    The property tax management system designed for efficient tax collection and digital finance solutions.
                </Typography>

                <Divider sx={{ backgroundColor: "#444", my: 3 }} />

                {/* 💰 BIDA Finance System */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "4.5vw", sm: "2.5vw", md: "1.8rem" },
                        color: "#4caf50",
                        mb: 1,
                        "&:hover": { color: "#66bb6a", transition: "0.3s" },
                    }}
                >
                    💰 BIDA Finance System
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
                    A financial management system for government funds allocation and expenditure tracking in their internal team.
                </Typography>

                <Divider sx={{ backgroundColor: "#444", my: 3 }} />

                {/* 🌍 DAMS Project */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "4.5vw", sm: "2.5vw", md: "1.8rem" },
                        color: "#00bcd4",
                        mb: 1,
                        "&:hover": { color: "#03a9f4", transition: "0.3s" },
                    }}
                >
                    🌍 DAMS Project (Himachal Pradesh Govt)
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
                    Developed a fund allocation system for government-acquired land, ensuring secure transactions records managemen.
                </Typography>

                <Divider sx={{ backgroundColor: "#444", my: 3 }} />

                {/* 🚀 Job Dekho (Purple Color) */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "4.5vw", sm: "2.5vw", md: "1.8rem" },
                        color: "#9c27b0",
                        mb: 1,
                        "&:hover": { color: "#ba68c8", transition: "0.3s" },
                    }}
                >
                    🚀 Job Dekho (MERN Stack Project)
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
                    A job search platform that connects employers and job seekers. Features  job posting, and application tracking. It is the basic project including only CRUD operations.
                </Typography>
            </Box>
        </Box>
    );
};

export default Projects;
