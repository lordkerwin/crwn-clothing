import {
    addItemToCart,
    clearItemFromCart,
    removeItemToCart,
} from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleClearItem = () =>
        dispatch(clearItemFromCart(cartItems, cartItem));
    const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem));
    const handleRemoveItem = () =>
        dispatch(removeItemToCart(cartItems, cartItem));

    return (
        <li className="flex items-center justify-between py-6 sm:py-10 gap-10">
            <img
                src={imageUrl}
                alt=""
                className="w-32 h-32 rounded grayscale"
            />
            <div className="grid grid-cols-4 gap-4 w-full">
                <div className="col-span-1 flex justify-center">{name}</div>
                <div className="col-span-1 flex justify-center">
                    <button
                        className="disabled:text-gray-300 disabled:cursor-not-allowed"
                        onClick={handleRemoveItem}
                        disabled={quantity === 1}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </button>

                    <div className="w-12 text-sm flex items-center justify-center">
                        {quantity}
                    </div>

                    <button className="" onClick={handleAddItem}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="col-span-1 flex justify-center">
                    £{price.toFixed(2)}
                </div>
                <button
                    className="col-span-1 flex justify-end text-sm font-bold"
                    onClick={handleClearItem}
                >
                    Remove
                </button>
            </div>
        </li>
    );
};

export default CheckoutItem;
