import styles from "./SearchUser.module.css"

function SearchUser() {

  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchInput} type="text" placeholder="...Search"/>
    </div>
  )
}

export default SearchUser