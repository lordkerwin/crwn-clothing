import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Home from "./routes/home/home.component";
import Layout from "./layout";
import Shop from "./routes/shop/shop.component";
import Authenticate from "./routes/authenticate/authenticate.component";
import CheckoutPage from "./routes/checkout/checkout.component";
import {
    createUserDocFromAuth,
    onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribeFromAuth = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribeFromAuth;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
