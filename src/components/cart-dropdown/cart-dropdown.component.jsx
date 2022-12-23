import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item.component/cart-item.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartDropdown = () => {
    const dispatch = useDispatch();

    // get cart items from cart selector
    const cartItems = useSelector(selectCartItems);

    const navigate = useNavigate();

    const navigateToCheckout = () => {
        dispatch(setIsCartOpen(false));
        navigate("/checkout");
    };

    return (
        <div className="absolute top-14 right-8 w-[300px] bg-white border-2 border-gray-200 rounded p-4 flex flex-col z-20">
            <div className="cart-items flex-1 pb-4">
                {cartItems.length === 0 && (
                    <div className="text-center">Your cart is empty</div>
                )}
                <div className="flex flex-col gap-2">
                    {cartItems.map((item, index) => (
                        <CartItem cartItem={item} key={index} />
                    ))}
                </div>
            </div>
            <Button onClick={navigateToCheckout}>Go to Checkout</Button>
        </div>
    );
};

export default CartDropdown;
