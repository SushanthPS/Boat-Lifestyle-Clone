import { ProductCard } from "./components/ProductCard";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import { ImageSlider } from "./components/ImageSlider";
import { Login } from "./components/Login";

import { Video } from "./components/Video";

import { Register } from "./components/Register";

function App() {
    return (
        <div className="App">
            <Navbar />
            {/* <Login /> */}
            <ImageSlider />
            <Video />
            {/* <ProductCard /> */}
            <Footer />
        </div>
    );
}

export default App;
