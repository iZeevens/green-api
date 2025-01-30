import styles from "./UsersList.module.css"
import SearchUser from "./SearchUser/SearchUser"

function UsersList() {
  return (
    <div className={styles.list}>
      <SearchUser />
      <span className={styles.listItem}>+7 (700) 289 44 44</span>
      <span className={styles.listItem}>+7 (700) 289 44 44</span>
      <span className={styles.listItem}>+7 (700) 289 44 44</span>
      <span className={styles.listItem}>+7 (700) 289 44 44</span>
    </div>
  )
}

export default UsersList