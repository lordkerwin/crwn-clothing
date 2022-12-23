import "./navbar.styles.scss";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";

const Navbar = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <div className="container min-h-[64px] flex items-center leading-none relative">
            <nav className="flex items-center justify-between py-2 w-full relative">
                <Link to="/" className="link">
                    <h1 className="text-3xl tracking-tighter font-black uppercase">
                        CRWN.
                    </h1>
                </Link>

                <div className="flex gap-8 items-center">
                    <ul className="flex items-center gap-8">
                        <li className="leading-none">
                            <Link to="/shop" className="link">
                                Shop
                            </Link>
                        </li>
                        <li className="leading-none">
                            {currentUser ? (
                                <span
                                    onClick={signOutUser}
                                    className="link hover:cursor-pointer"
                                >
                                    Sign Out
                                </span>
                            ) : (
                                <Link to="/authenticate" className="link">
                                    Sign In
                                </Link>
                            )}
                        </li>
                    </ul>
                    <CartIcon />
                </div>
            </nav>
            {isCartOpen && <CartDropdown />}
        </div>
    );
};

export default Navbar;
