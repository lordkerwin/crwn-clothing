import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const handleAddToCart = () => dispatch(addItemToCart(cartItems, product));


    return (
        <div className="group hover:cursor-pointer">
            <div className="aspect-w-1 aspect-h-1 w-full sm:h-[300px] relative overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src={imageUrl}
                    alt={name}
                    className="h-full w-full object-cover object-center z-10"
                />
                <div className="bg-white absolute w-full h-full top-0 opacity-0 group-hover:opacity-60 flex items-center justify-center transition">
                    <Button
                        buttonType="inverted"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
                &pound;{price.toFixed(2)}
            </p>
        </div>
    );
};

export default ProductCard;
