// src/pages/Home/Home.jsx
import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import modules from swiper/modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// Import Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./Home.css";

const images = [
  "https://picsum.photos/1200/500?random=1",
  "https://picsum.photos/1200/500?random=2",
  "https://picsum.photos/1200/500?random=3",
];

export default function Home() {
    let d=""
  return (
    <Box className="home-container">
      
      <Box className="carousel-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          effect="fade"
          loop={true}
        >
          {images.map((url, index) => (
            <SwiperSlide key={index}>
              <Box
                className="slide"
                sx={{
                  backgroundImage: `url(${url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <div>
       <TextField
  variant="outlined"
  label="Enter"
  sx={{
    width: "100%",
    "& .MuiInputBase-input": {
      height: "100px",
      color: "red",
      padding: "0 14px",
      backgroundColor:"yellow"
    },
  }}
/>

      </div>
    </Box>
  );
}
