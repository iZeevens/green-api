import styles from "./UsersList.module.css";
import { useState } from "react";
import SearchUser from "./SearchUser/SearchUser";
import AddNewUser from "./AddNewUser/AddNewUser";
interface IUsersListProps {
  setSelectedUser: (user: string) => void;
}

function UsersList({ setSelectedUser }: IUsersListProps) {
  const [users, setUser] = useState<Set<string>>(new Set());

  return (
    <div className={styles.list}>
      <SearchUser />
      <div className={styles.listItems}>
        {users.size > 0
          ? [...users].map((user) => (
              <span
                className={styles.listItem}
                onClick={() => setSelectedUser(user)}
                key={user}
              >
                {user}
              </span>
            ))
          : ""}
      </div>
      <AddNewUser setUser={setUser} />
    </div>
  );
}

export default UsersList;
