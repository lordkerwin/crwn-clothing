import "./navbar.styles.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navbar = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <div className="container min-h-[64px] flex items-center leading-none relative">
            <nav className="flex items-center justify-between py-2 w-full relative">
                <ul className="links-container">
                    <li className="leading-none">
                        <Link to="/" className="link">
                            Home
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
                    <li className="leading-none">
                        <Link to="/shop" className="link">
                            Shop
                        </Link>
                    </li>
                </ul>

                <CartIcon />
            </nav>
            {isCartOpen && <CartDropdown />}
        </div>
    );
};

export default Navbar;
