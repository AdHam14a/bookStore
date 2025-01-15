import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Avatar, Button } from "@mui/material";
import mainBook from "../../../assets/Images/MainBook.png";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import cat1 from "../../../assets/Images/cat1.jpg";
import cat2 from "../../../assets/Images/cat2.jpg";
import cat3 from "../../../assets/Images/cat3.jpg";
import book1 from "../../../assets/Images/book1.png";
import book2 from "../../../assets/Images/book2.png";
import book3 from "../../../assets/Images/book3.png";
import book4 from "../../../assets/Images/book4.png";
import { Pagination } from "@mui/material";

export default function Home() {
  // Categories
  const catImages = [cat1, cat2, cat3];
  const [cat, setCat] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const getCat = async () => {
    try {
      const response = await axios.get(
        "https://upskilling-egypt.com:3007/api/category"
      );
      setCat(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = cat.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(cat.length / itemsPerPage);
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Books

  const bookImages = [book1, book2, book3, book4];
  const [books, setbooks] = useState([]);
  const [currentPageBooks, setCurrentPageBooks] = useState(1);
  const itemsPerPageBooks = 4;
  const getBooks = async () => {
    try {
      const res = await axios.get("https://upskilling-egypt.com:3007/api/book");
      console.log(res?.data?.data);
      setbooks(res?.data?.data);
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

  // single book
  const [currentPageBook, setCurrentPageBook] = useState(1);
  const itemsPerPageBook = 1;
  const startIndexBook = (currentPageBook - 1) * itemsPerPageBook;
  const currentItemsBook = books.slice(
    startIndexBook,
    startIndexBook + itemsPerPageBook
  );
  const totalPagesBook = Math.ceil(books.length / itemsPerPageBook);
  const handlePageChangeBook = (event, value) => {
    setCurrentPageBook(value);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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
                <Avatar src="/broken-image.jpg" sx={{ cursor: "pointer" }} />
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontSize: "0.950rem",
                  mr: 3,
                  cursor: "pointer",
                  "&:hover": {
                    color: "#EF6B4A",
                  },
                }}
              >
                HOME
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontSize: "0.950rem",
                  mr: 3,
                  cursor: "pointer",
                  "&:hover": {
                    color: "#EF6B4A",
                  },
                }}
              >
                ABOUT US
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontSize: "0.950rem",
                  mr: 3,
                  cursor: "pointer",
                  "&:hover": {
                    color: "#EF6B4A",
                  },
                }}
              >
                BOOKS
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontSize: "0.950rem",
                  mr: 3,
                  cursor: "pointer",
                  "&:hover": {
                    color: "#EF6B4A",
                  },
                }}
              >
                NEW RELEASES
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontSize: "0.950rem",
                  mr: 3,
                  cursor: "pointer",
                  "&:hover": {
                    color: "#EF6B4A",
                  },
                }}
              >
                CONTACT US
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontSize: "0.950rem",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#EF6B4A",
                  },
                }}
              >
                BLOG
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PersonOutlinedIcon
                sx={{
                  mr: 3,
                  cursor: "pointer",
                  "&:hover": {
                    color: "#EF6B4A",
                  },
                }}
              />
              <ShoppingBagOutlinedIcon
                sx={{
                  mr: 3,
                  cursor: "pointer",
                  "&:hover": {
                    color: "#EF6B4A",
                  },
                }}
              />
              <FavoriteBorderRoundedIcon
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "#EF6B4A",
                  },
                }}
              />
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "20px",
            justifyContent: "center",
            background: "linear-gradient(90deg,#FFE5E5,#F5FFFE,#FFFFFF)",
          }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4000 }}
            style={{ width: "100%", height: "auto", marginLeft: "20px" }}
          >
            <SwiperSlide>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ mr: "20px" }}>
                  <Typography
                    variant="h2"
                    component="h3"
                    sx={{ fontWeight: 500, color: "#393280", mb: "20px" }}
                  >
                    ipsum dolor sit
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{ fontWeight: 200, color: "#393280" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    <br /> elit. Sed eu feugiat amet, libero ipsum enim pharetra
                    <br /> hac. Urna commodo, lacus ut magna velit eleifend.
                    <br /> Amet, quis urna, a eu.
                  </Typography>
                </Box>
                <img src={mainBook} alt="Book Cover" />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ mr: "20px" }}>
                  <Typography
                    variant="h2"
                    component="h3"
                    sx={{ fontWeight: 500, color: "#393280", mb: "20px" }}
                  >
                    ipsum dolor sit
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{ fontWeight: 200, color: "#393280" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    <br /> elit. Sed eu feugiat amet, libero ipsum enim pharetra
                    <br /> hac. Urna commodo, lacus ut magna velit eleifend.
                    <br /> Amet, quis urna, a eu.
                  </Typography>
                </Box>
                <img src={mainBook} alt="Book Cover" />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ mr: "20px" }}>
                  <Typography
                    variant="h2"
                    component="h3"
                    sx={{ fontWeight: 500, color: "#393280", mb: "20px" }}
                  >
                    ipsum dolor sit
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{ fontWeight: 200, color: "#393280" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    <br /> elit. Sed eu feugiat amet, libero ipsum enim pharetra
                    <br /> hac. Urna commodo, lacus ut magna velit eleifend.
                    <br /> Amet, quis urna, a eu.
                  </Typography>
                </Box>
                <img src={mainBook} alt="Book Cover" />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ mr: "20px" }}>
                  <Typography
                    variant="h2"
                    component="h3"
                    sx={{ fontWeight: 500, color: "#393280", mb: "20px" }}
                  >
                    ipsum dolor sit
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{ fontWeight: 200, color: "#393280" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    <br /> elit. Sed eu feugiat amet, libero ipsum enim pharetra
                    <br /> hac. Urna commodo, lacus ut magna velit eleifend.
                    <br /> Amet, quis urna, a eu.
                  </Typography>
                </Box>
                <img src={mainBook} alt="Book Cover" />
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
      {/* Categories */}
      <Box
        sx={{ flexGrow: 1, mt: "60px", margin: "40px", position: "relative" }}
      >
        <Box>
          <Typography
            sx={{ color: "#ED553B", fontWeight: "500", marginLeft: "60px" }}
          >
            Categories
          </Typography>
          <Typography
            sx={{
              color: "#393280",
              fontWeight: "700",
              mt: "15px",
              fontSize: "32px",
            }}
          >
            Explore our Top Categories
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-evenly", mt: "35px" }}
        >
          {currentItems.map((ele, index) => (
            <Box key={ele?.id}>
              <img
                src={catImages[index % catImages.length]}
                alt="image"
                style={{ width: "350px", borderRadius: "15px" }}
              />
              <Typography
                sx={{
                  color: "#393280",
                  fontSize: "25px",
                  textAlign: "center",
                  mt: "12px",
                }}
              >
                {ele?.title}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "35px" }}>
          <Button
            variant="outlined"
            sx={{ color: "#393280", borderColor: "#393280" }}
          >
            View More
            <ArrowRightAltIcon sx={{ marginLeft: "10px" }} />
          </Button>
        </Box>

        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: "20px",
            position: "absolute",
            top: "20px",
            right: "20px",
          }}
        />
      </Box>
      {/* Books */}
      <Box
        sx={{
          flexGrow: 1,
          mt: "120px",
          backgroundColor: "#FCECEC",
          pb: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: "#7A7A7A", fontWeight: "500", mb: "10px", mt: "80px" }}
          >
            SOME QUALITY ITEMS
          </Typography>
          <Typography
            sx={{
              color: "#393280",
              fontWeight: "700",
              mb: "45px",
              fontSize: "32px",
            }}
          >
            New Release Books
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-evenly", mt: "35px" }}
        >
          {currentItemsBooks.map((ele, index) => (
            <Box key={ele?.id}>
              <img
                src={bookImages[index % bookImages.length]}
                alt="image"
                style={{ width: "350px", borderRadius: "15px" }}
              />
              <Typography
                sx={{
                  color: "#393280",
                  fontSize: "22px",
                  textAlign: "center",
                  mt: "10px",
                }}
              >
                {ele?.name}
              </Typography>
              <Typography
                sx={{
                  color: "#888888",
                  fontSize: "14px",
                  textAlign: "center",
                  mt: "5px",
                }}
              >
                {ele?.author}
              </Typography>
              <Typography
                sx={{
                  color: "#ED553B",
                  fontSize: "16px",
                  textAlign: "center",
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
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "50px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            color: "#ED553B",
          }}
        >
          <Typography
            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            View all books
            <ArrowRightAltIcon
              sx={{ marginLeft: "10px", marginRight: "25px " }}
            />
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          mt: "50px",
          py: "50px",
          background: "linear-gradient(90deg,#FBEEEE,#F7FFFE)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <img
            src={bookImages[currentPageBook % bookImages.length]}
            alt="Featured Book"
            style={{
              width: "400px",
              borderRadius: "15px",
              marginBottom: "20px",
            }}
          />
          <Box sx={{ textAlign: "center" }}>
            {" "}
            {/* Center text content */}
            <Typography
              variant="h4"
              component="h4"
              sx={{ color: "#393280", fontWeight: "600", mb: "20px" }}
            >
              Featured Book
            </Typography>
            {currentItemsBook.map((book) => (
              <Box key={book?.id} sx={{ mb: "20px" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "100" }}>
                  By {book?.author}
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ mt: "10px", fontWeight: "600", color: "#393280" }}
                >
                  {book?.title}
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ mt: "10px", fontWeight: "600", color: "#393280" }}
                >
                  {book?.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ mt: "20px", fontWeight: "100" }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores unde
                  <br /> nihil minima excepturi non pariatur velit.
                </Typography>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ mt: "10px", fontWeight: "700", color: "#ED553B" }}
                >
                  ${book?.price}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ color: "#393280", borderColor: "#393280", mt: "30px" }}
                >
                  View More
                  <ArrowRightAltIcon sx={{ marginLeft: "10px" }} />
                </Button>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" ,mb:"50px"}}>
          <Pagination
            count={totalPagesBook}
            page={currentPageBook}
            onChange={handlePageChangeBook}
            color="primary"
            
          />
        </Box>
      </Box>
    </>
  );
}
