import styles from "./UsersList.module.css";
import { useState } from "react";
import SearchUser from "./SearchUser/SearchUser";

interface IUsersListProps {
  setSelectedUser: (user: string) => void;
}

function UsersList({ setSelectedUser }: IUsersListProps) {
  const [users, setUser] = useState<string[]>([]);

  return (
    <div className={styles.list}>
      <SearchUser />
      {users.length > 0
        ? users.map((user) => (
            <span className={styles.listItem} onClick={() => setSelectedUser(user)}>
              {user}
            </span>
          ))
        : ""}
    </div>
  );
}

export default UsersList;
