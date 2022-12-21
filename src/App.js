import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Layout from "./layout";
import Shop from "./routes/shop/shop.component";
import Authenticate from "./routes/authenticate/authenticate.component";
import CheckoutPage from "./routes/checkout/checkout.component";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={"authenticate"} element={<Authenticate />} />
                <Route path={"shop/*"} element={<Shop />} />
                <Route path={"checkout"} element={<CheckoutPage />} />
            </Route>
        </Routes>
    );
};

export default App;
