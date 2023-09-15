export default function ShopSearch({ handleSearch }) {
  return (
    <div className="shop__search">
      <form className="shop__form">
        <label htmlFor="shop-search" className="shop__search-label">
          Search
        </label>
        <input
          className="shop__input"
          type="text"
          name="shop-search"
          id=""
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}
