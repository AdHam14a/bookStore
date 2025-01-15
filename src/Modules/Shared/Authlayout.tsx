import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import bookStoreImg from "../../assets/Images/auth.jpg";
import bookslogo from "../../assets/Images/booksLogo.png";
import { Outlet } from "react-router-dom";



export default function Authlayout() {
  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          md={6}
          sx={{
            backgroundImage: `url(${bookStoreImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: ({ palette }) =>
              palette.mode === "light" ? palette.grey[50] : palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          xs={12}
          sm={12}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "85%", md: "75%" },
            maxWidth: "500px",
          }}
        >
          <img src={bookslogo} alt="Bookstore Logo" style={{ marginBottom: 20 }} />
          <Outlet />
        </Box>
        </Grid>
      </Grid>
    </>
  );
}
