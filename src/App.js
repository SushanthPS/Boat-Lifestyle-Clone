import { Navbar } from "./components/navbar/Navbar";
import { Routes } from "./routes/Routes";
import ProductPage from "./components/ProductPage/ProductPage";
import CartPage from "./components/CartPage/CartPage";

function App() {
    return (
        <div className="App">
            <Navbar />
            <ProductPage />
            {/* <CartPage /> */}
            {/* <Routes /> */}
        </div>
    );
}

export default App;
