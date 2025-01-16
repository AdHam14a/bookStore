import {
  AppBar,
  Avatar,
  Box,
  Button,
  Pagination,
  Toolbar,
  Typography,
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import book1 from "../../../assets/Images/book1.png";
import book2 from "../../../assets/Images/book2.png";
import book3 from "../../../assets/Images/book3.png";
import book4 from "../../../assets/Images/book4.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";

export default function Books() {
  const bookImages = [book1, book2, book3, book4];
  const [books, setBooks] = useState([]);
  const [currentPageBooks, setCurrentPageBooks] = useState(1);
  const [itemsPerPageBooks, setItemsPerPageBooks] = useState(3);
  const [viewType, setViewType] = useState("grid");

  const getBooks = async () => {
    try {
      const res = await axios.get("https://upskilling-egypt.com:3007/api/book");
      setBooks(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const startIndexBooks = (currentPageBooks - 1) * itemsPerPageBooks;
  const currentItemsBooks = books.slice(
    startIndexBooks,
    startIndexBooks + itemsPerPageBooks
  );
  const totalPagesBooks = Math.ceil(books.length / itemsPerPageBooks);

  const handlePageChangeBooks = (event, value) => {
    setCurrentPageBooks(value);
  };

  const handleItemsPerPageChange = (num) => {
    setItemsPerPageBooks(num);
    setCurrentPageBooks(1);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FFFFFF", color: "black" }}
      >
        <Toolbar sx={{ justifyContent: "space-between", height: "80px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: "0.950rem" }}
            >
              <DashboardIcon
                sx={{
                  backgroundColor: "#ED553B",
                  color: "#FFFFFF",
                  border: "2px solid #ED553B",
                  borderRadius: "5px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#ED553B",
                    backgroundColor: "#FFFFFF",
                  },
                }}
              />
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "65px" }}
          >
            <Avatar src="/broken-image.jpg" sx={{ cursor: "pointer" }} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PersonOutlinedIcon
              sx={{ mr: 3, cursor: "pointer", "&:hover": { color: "#EF6B4A" } }}
            />
            <ShoppingBagOutlinedIcon
              sx={{ mr: 3, cursor: "pointer", "&:hover": { color: "#EF6B4A" } }}
            />
            <FavoriteBorderRoundedIcon
              sx={{ cursor: "pointer", "&:hover": { color: "#EF6B4A" } }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "75px",
          background: "linear-gradient(90deg,#FFE5E5,#F5FFFE)",
          color: "#393280",
        }}
      >
        <Typography component="h5" variant="h5">
          HOME / PRODUCTS
        </Typography>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: 2 }}>
        <Box sx={{ my: "25px" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon sx={{ color: "#393280" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" sx={{ color: "#393280" }}>
                Price
              </Typography>
            </AccordionSummary>
            <AccordionDetails>Lorem ipsum dolor sit amet</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon sx={{ color: "#393280" }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span" sx={{ color: "#393280" }}>
                Product Type
              </Typography>
            </AccordionSummary>
            <AccordionDetails>Lorem ipsum dolor sit amet</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon sx={{ color: "#393280" }} />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span" sx={{ color: "#393280" }}>
                Availability
              </Typography>
            </AccordionSummary>
            <AccordionDetails>Lorem ipsum dolor sit amet</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon sx={{ color: "#393280" }} />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography component="span" sx={{ color: "#393280" }}>
                Brand
              </Typography>
            </AccordionSummary>
            <AccordionDetails>Lorem ipsum dolor sit amet</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon sx={{ color: "#393280" }} />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <Typography component="span" sx={{ color: "#393280" }}>
                Color
              </Typography>
            </AccordionSummary>
            <AccordionDetails>Lorem ipsum dolor sit amet</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon sx={{ color: "#393280" }} />}
              aria-controls="pane6-content"
              id="panel6-header"
            >
              <Typography component="span" sx={{ color: "#393280" }}>
                Material
              </Typography>
            </AccordionSummary>
            <AccordionDetails>Lorem ipsum dolor sit amet</AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", my: "25px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Box>
              <Button
                variant={viewType === "grid" ? "contained" : "outlined"}
                onClick={() => setViewType("grid")}
                sx={{
                  border: "1px solid #ED553B",
                  backgroundColor: viewType === "grid" ? "#ED553B" : "#FFF",
                  color: viewType === "grid" ? "#FFF" : "#ED553B",
                  "&:hover": {
                    backgroundColor: viewType === "grid" ? "#ED553B" : "#FFF",
                    color: viewType === "grid" ? "#FFF" : "#ED553B",
                  },
                }}
              >
                <GridViewIcon />
              </Button>
              <Button
                variant={viewType === "list" ? "contained" : "outlined"}
                onClick={() => setViewType("list")}
                sx={{
                  border: "1px solid #ED553B",
                  backgroundColor: viewType === "list" ? "#ED553B" : "#FFF",
                  color: viewType === "list" ? "#FFF" : "#ED553B",
                  "&:hover": {
                    backgroundColor: viewType === "list" ? "#ED553B" : "#FFF",
                    color: viewType === "list" ? "#FFF" : "#ED553B",
                  },
                }}
              >
                <MenuIcon />
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() => handleItemsPerPageChange(3)}
                sx={{
                  backgroundColor: itemsPerPageBooks === 3 ? "#ED553B" : "#FFF",
                  color: itemsPerPageBooks === 3 ? "#FFF" : "#ED553B",
                  margin: "0 5px",
                  "&:hover": {
                    backgroundColor:
                      itemsPerPageBooks === 3 ? "#ED553B" : "#FFF",
                    color: itemsPerPageBooks === 3 ? "#FFF" : "#ED553B",
                  },
                }}
              >
                3
              </Button>

              <Button
                onClick={() => handleItemsPerPageChange(6)}
                sx={{
                  backgroundColor: itemsPerPageBooks === 6 ? "#ED553B" : "#FFF",
                  color: itemsPerPageBooks === 6 ? "#FFF" : "#ED553B",
                  margin: "0 5px",
                  "&:hover": {
                    backgroundColor:
                      itemsPerPageBooks === 6 ? "#ED553B" : "#FFF",
                    color: itemsPerPageBooks === 6 ? "#FFF" : "#ED553B",
                  },
                }}
              >
                6
              </Button>

              <Button
                onClick={() => handleItemsPerPageChange(9)}
                sx={{
                  backgroundColor: itemsPerPageBooks === 9 ? "#ED553B" : "#FFF",
                  color: itemsPerPageBooks === 9 ? "#FFF" : "#ED553B",
                  margin: "0 5px",
                  "&:hover": {
                    backgroundColor:
                      itemsPerPageBooks === 9 ? "#ED553B" : "#FFF",
                    color: itemsPerPageBooks === 9 ? "#FFF" : "#ED553B",
                  },
                }}
              >
                9
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: viewType === "grid" ? "grid" : "block",
              gridTemplateColumns:
                viewType === "grid" ? "repeat(3, 1fr)" : "1fr",
              gap: viewType === "list" ? 1 : 2, 
            }}
          >
            {currentItemsBooks.map((ele, index) => (
              <Box
                key={ele?.id}
                sx={{
                  textAlign: "center",
                  marginBottom: viewType === "list" ? 1 : 2,
                }}
              >
                <img
                  src={bookImages[index % bookImages.length]}
                  alt="image"
                  style={{
                    width: viewType === "grid" ? "100%" : "80%", 
                    borderRadius: "15px",
                    cursor: "pointer",
                  }}
                />
                <Typography
                  sx={{
                    color: "#393280",
                    fontSize: viewType === "list" ? "18px" : "22px",
                    mt: "10px",
                  }}
                >
                  {ele?.name}
                </Typography>
                <Typography
                  sx={{
                    color: "#888888",
                    fontSize: viewType === "list" ? "12px" : "14px",
                    mt: "5px",
                  }}
                >
                  {ele?.author}
                </Typography>
                <Typography
                  sx={{
                    color: "#ED553B",
                    fontSize: viewType === "list" ? "14px" : "16px",
                    mt: "12px",
                  }} 
                >
                  ${ele?.price}
                </Typography>
              </Box>
            ))}
          </Box>

          <Pagination
            count={totalPagesBooks}
            page={currentPageBooks}
            onChange={handlePageChangeBooks}
            color="primary"
            sx={{ display: "flex", justifyContent: "center", mt: "50px" }}
          />
        </Box>
      </Box>
    </>
  );
}
