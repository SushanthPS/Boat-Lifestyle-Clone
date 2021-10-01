import { Route, Switch } from "react-router-dom";
import { Error } from "../components/Error";
import { HomePage } from "../components/homepage/HomePage";
import { Champions } from "../components/Champions";
import { Login } from "../components/Login";
import { Register } from "../components/Register";

export function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>

            <Route path="/pages/sound-of-champions">
                <Champions />
            </Route>

            <Route path="/account/login">
                <Login />
            </Route>

            <Route path="/account/register">
                <Register />
            </Route>

            <Route>
                <Error />
            </Route>
        </Switch>
    );
}
