import { Navbar } from "./components/navbar/Navbar";
import { Routes } from "./routes/Routes";
import ProductPage from "./components/ProductPage/ProductPage";
import CartPage from "./components/CartPage/CartPage";
import { Success } from "./components/Success";

function App() {
    return (
        <div className="App">
            {/* <Navbar /> */}
            <Success />
            {/* <Routes /> */}
        </div>
    );
}

export default App;
