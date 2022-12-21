import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "./checkout-item.component";

const CheckoutPage = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return (
        <div className="container">
            <div className="flex flex-col gap-y-4">
                <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
                    {cartItems.map((item, index) => (
                        <CheckoutItem cartItem={item} key={index} />
                    ))}
                </ul>

                <div className="flex justify-end">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="col-span-1 text-gray-600">Total</div>
                        <div className="col-span-1 text-right font-bold">
                            £{cartTotal.toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
