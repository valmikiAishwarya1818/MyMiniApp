import PropTypes from "prop-types";
import Card from "./Card";

export default function ListItem({
    items,
    isFavorite,
    isImportant,
    updateArr,
    removeItem
}) {
    return (
        <section className="list-items">
            {
                items.map((value, index) => {
                    const filterCondition = (value?.favorite === isFavorite && value?.important === isImportant);
                    const displayStyle = {
                        display: (filterCondition ? "block" : "none")
                    };
                    return (
                        <div key={index} style={displayStyle}>
                            <Card
                                data={value}
                                index={index}
                                removeItem={removeItem}
                                updateArr={updateArr}
                            />
                        </div>
                    );
                })
            }
        </section>
    );
}

ListItem.propTypes = {
    items: PropTypes.array,
    isFavorite: PropTypes.bool,
    isImportant: PropTypes.bool,
    updateArr: PropTypes.func,
    removeItem: PropTypes.func,
};