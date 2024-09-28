import PropTypes from "prop-types";

export default function FilterSection({
    isFavorite,
    isImportant,
    filterItems
}) {
    const handleFavoriteClick = () => {
        // when favorite is selected.
        // change from 
        // 🔁 false -> true
        // 🔁 true  -> false
        filterItems(!isFavorite, isImportant);
        // in above code, as we want to update favorite,
        // only changing isFavorite.
    }
    const handleImportantClick = () => {
        filterItems(isFavorite, !isImportant);
        // this is same as handleFavoriteClick,
        // Instead of isFavorite, I am updating isImportant.
    }
    return (
        <section className="filter">
            <div onClick={handleImportantClick} className={"tag" + ( isImportant ? " selected" : "")} >Important 🏷️</div>
            <div onClick={handleFavoriteClick} className={"tag" + (  isFavorite ? " selected" : "")} >Favorite ⭐</div>
        </section>
    );
}

FilterSection.propTypes = {
    isFavorite: PropTypes.bool,
    isImportant: PropTypes.bool,
    filterItems: PropTypes.func
};