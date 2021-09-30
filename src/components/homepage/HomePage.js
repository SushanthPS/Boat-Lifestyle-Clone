import { Navbar } from "../navbar/Navbar";
import { ImageSlider } from "./ImageSlider";
import { Footer } from "../Footer";
import { Video } from "./Video";
import { ImageSlider2 } from "./ImageSlider2";
import { Blog } from "./blog/Blog";

export const HomePage = () => {
    return (
        <>
            <Navbar />
            <ImageSlider />
            {/* ComplexSlider */}
            <Video />
            <ImageSlider2 />
            <Blog />
            {/* The boAthead Vibe */}
            {/* Qoute Slider */}
            {/* Brands */}
            <Footer />
        </>
    );
};
