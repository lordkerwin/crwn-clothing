import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className="container">
            <div className="flex flex-col gap-y-10">
                {Object.keys(categoriesMap).map((title) => (
                    <CategoryPreview
                        key={title}
                        title={title}
                        items={categoriesMap[title].items}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoriesPreview;
