import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <div className="container">
            <div className="flex flex-col gap-y-10">
                {Object.keys(categoriesMap).map((title) => (
                    <CategoryPreview
                        key={title}
                        title={title}
                        items={categoriesMap[title]}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoriesPreview;
