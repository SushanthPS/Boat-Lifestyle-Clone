import { ProductCard } from "./components/ProductCard";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import { ImageSlider } from "./components/ImageSlider";

function App() {
    return (
        <div className="App">
            <Navbar />
            <ImageSlider />
            <ProductCard />
            <Footer />
        </div>
    );
}

export default App;
