import { ProductCard } from "./components/ProductCard";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import { ImageSlider } from "./components/ImageSlider";
import { Login } from "./components/Login";
import { Video } from "./components/Video";
import { Register } from "./components/Register";
import { Error } from "./components/Error";
import { Chatbot } from "./components/Chatbot";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Error />
            {/* <Login />
            <Video /> */}
            {/* <ImageSlider />
            <ProductCard /> */}
            <Footer />
        </div>
    );
}

export default App;
