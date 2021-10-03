import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import { Routes } from "./routes/Routes";
import ProductPage from "./components/ProductPage/ProductPage";
import CartPage from "./components/CartPage/CartPage";
import Payment from "./components/Payment/Payment";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Payment/>
            {/* <ProductPage /> */}
            {/* <CartPage /> */}
            {/* <Routes /> */}
            {/* <Footer /> */}
        </div>
    );
}

export default App;
