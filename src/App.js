import { ProductCard } from "./components/ProductCard";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <ProductCard />
            <Footer />
        </div>
    );
}

export default App;
