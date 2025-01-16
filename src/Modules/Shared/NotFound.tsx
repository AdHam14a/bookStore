import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#ED553B",
          height: "100vh",
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            color: "#FFF",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Not Found
        </Typography>
      </Box>
    </>
  );
}
