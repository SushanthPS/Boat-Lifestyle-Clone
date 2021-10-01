import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import { Routes } from "./routes/Routes";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes />
            <Footer />
        </div>
    );
}

export default App;
