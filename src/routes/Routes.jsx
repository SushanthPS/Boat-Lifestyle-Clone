import { Route, Switch } from "react-router-dom";
import { Error } from "../components/Error";
import { HomePage } from "../components/homepage/HomePage";
import { Champions } from "../components/Champions";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Footer } from "../components/Footer";
import ProductPage from "../components/ProductPage/ProductPage";
import { Collections } from "../components/Collections";

export function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage />
                <Footer />
            </Route>

            <Route path="/pages/sound-of-champions">
                <Champions />
                <Footer />
            </Route>

            <Route path="/account/login">
                <Login />
                <Footer />
            </Route>

            <Route path="/account/register">
                <Register />
                <Footer />
            </Route>

            <Route path="/products/:productName">
                <ProductPage />
            </Route>

            <Route path="/collections/:collectionName">
                <Collections />
                <Footer />
            </Route>

            <Route>
                <Error />
                <Footer />
            </Route>
        </Switch>
    );
}
