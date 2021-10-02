import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import { Routes } from "./routes/Routes";
import CartPage from "./components/CartPage/CartPage";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
    return (
        <div className="App">
            <Navbar />
            {/* <ProductPage /> */}
            <CartPage />
            {/* <Routes /> */}
            <Footer />
        </div>
    );
}

export default App;
