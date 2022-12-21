import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
    const { category } = useParams();
    console.log(category);
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(categoriesMap[category]?.items);
    }, [category, categoriesMap]);

    return (
        <div className="container my-12">
            <div className="grid grid-cols-4 gap-10">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </div>
    );
};

export default Category;
