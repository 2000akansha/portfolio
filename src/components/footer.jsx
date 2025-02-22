import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 3,
        bgcolor: "grey.900",
        color: "white",
        width: "100vw", // Ensures full width
        position: "fixed", // Sticks to bottom
        bottom: 0, // Aligns it to bottom
        left: 0, // Ensures it starts from the left edge
      }}
    >
      <Typography variant="body2">
        © 2025 Akansha Bhagat. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
