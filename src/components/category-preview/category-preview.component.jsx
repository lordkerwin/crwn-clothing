import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, items }) => {
    return (
        <div className="container">
            <div className="flex flex-col items-center w-full">
                <Link to={title.toLowerCase()}>
                    <h1 className="py-4 font-bold">{title.toUpperCase()}</h1>
                </Link>
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 w-full">
                    {items
                        .filter((_, idx) => idx < 4)
                        .map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPreview;
