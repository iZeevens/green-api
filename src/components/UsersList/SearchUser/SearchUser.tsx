import styles from "./SearchUser.module.css"

function SearchUser() {

  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchInput} type="text" placeholder="Username"/>
    </div>
  )
}

export default SearchUser