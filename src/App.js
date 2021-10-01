import { ProductCard } from "./components/ProductCard";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import { ImageSlider } from "./components/ImageSlider";
import { Login } from "./components/Login";
import { Video } from "./components/Video";
import { Register } from "./components/Register";
import { Error } from "./components/Error";
import { Chatbot } from "./components/Chatbot";
import { Blog } from "./components/blog/Blog";
import { Champions } from "./components/Champions";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Champions />
            <ProductCard />
            {/* <ImageSlider />
            <Video />
            <Blog />
            <ProductCard /> */}
            <Footer />
        </div>
    );
}

export default App;
