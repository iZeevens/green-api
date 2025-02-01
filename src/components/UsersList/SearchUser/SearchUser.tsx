import styles from "./SearchUser.module.css";
interface ISearchUserProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function SearchUser({ search, setSearch }: ISearchUserProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setSearch(value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="...Search"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchUser;
