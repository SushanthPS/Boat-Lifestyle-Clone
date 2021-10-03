import { Navbar } from "./components/navbar/Navbar";
import { Routes } from "./routes/Routes";
import ProductPage from "./components/ProductPage/ProductPage";
import { ProductCard } from "./components/ProductCard";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes />
        </div>
    );
}

export default App;
