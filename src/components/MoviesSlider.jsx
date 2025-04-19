import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Card from "../components/Card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const MoviesSlider = ({ mv }) => {

    return (
        <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={10} slidesPerView={5} grabCursor={true} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} pagination={{ clickable: true }} navigation breakpoints={{ 220: { slidesPerView: 2 }, 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 }, }} >
            {mv.map((movie) => (
                <SwiperSlide key={movie.id} >
                    <Link to={`/movie/${movie.id}`}>
                        <Card mv={movie} />
                    </Link>
                </SwiperSlide>
            ))
            }
        </Swiper >
    );
};

export default MoviesSlider;
