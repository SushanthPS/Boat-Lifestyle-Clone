import { HomePage } from "./components/homepage/HomePage";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import { Champions } from "./components/Champions";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Champions />
            <Footer />
        </div>
    );
}

export default App;
