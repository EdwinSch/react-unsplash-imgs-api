import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    setSearchTerm(searchValue);

    if (!searchValue) {
      return;
    }
  };

  return (
    <section>
      <h1 className="title">search unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="dog"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
