import Categoryitem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
    return (
        <div className="container">
            <div className="flex flex-wrap space-between">
                {categories.map((category) => (
                    <Categoryitem key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default Directory;
