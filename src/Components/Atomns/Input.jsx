

function Input({ searchValue, setSearchValue, loading }) {
  const onChangeValueSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <input
        className="toDoSearch"
        placeholder="Busca entre los personajes"
        value={searchValue}
        onChange={onChangeValueSearch}
        disabled={loading}
      />
    </div>
  );
}

export default Input;
