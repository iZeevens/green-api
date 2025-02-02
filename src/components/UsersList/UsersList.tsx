import styles from "./UsersList.module.css";
import { useState } from "react";
import SearchUser from "./SearchUser/SearchUser";
import AddNewUser from "./AddNewUser/AddNewUser";
interface IUsersListProps {
  setSelectedUser: (user: string) => void;
}

function UsersList({ setSelectedUser }: IUsersListProps) {
  const [users, setUsers] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredUsers =
    searchQuery.length > 0
      ? [...users].filter((user) =>
          user.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [...users];

  return (
    <div className={styles.list}>
      <SearchUser search={searchQuery} setSearch={setSearchQuery} />
      <div className={styles.listItems}>
        {filteredUsers.length > 0
          ? filteredUsers.map((user) => (
              <span
                className={styles.listItem}
                onClick={() => setSelectedUser(user)}
                key={user}
              >
                {user}
              </span>
            ))
          : "No users found"}
      </div>
      <AddNewUser setUsers={setUsers} />
    </div>
  );
}

export default UsersList;
