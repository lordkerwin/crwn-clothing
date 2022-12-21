import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item.component/cart-item.component";

const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const navigateToCheckout = () => {
        setIsCartOpen(false);
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
