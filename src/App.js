import { HomePage } from "./components/homepage/HomePage";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import { ProductCard } from "./components/ProductCard";

function App() {
    return (
        <div className="App">
            <Navbar />
            {/* <HomePage /> */}
            <Footer />
        </div>
    );
}

export default App;
