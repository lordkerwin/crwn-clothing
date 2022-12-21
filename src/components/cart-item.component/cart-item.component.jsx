const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <img
                    src={imageUrl}
                    alt=""
                    className="w-12 h-12 rounded grayscale "
                />
                <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">
                        {name}
                    </h3>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">
                            Qty: {quantity}
                        </span>
                        <span className="text-sm text-gray-500">£{price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
