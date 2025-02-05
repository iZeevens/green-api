import styles from "./AddNewUser.module.css";
import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input/input";

interface IAddNewUser {
  setUsers: React.Dispatch<React.SetStateAction<Set<string>>>;
}

function AddNewUser({ setUsers }: IAddNewUser) {
  const [newUser, setNewUser] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleAddNewUser = () => {
    if (error || !newUser) return 

    setUsers((prevUsers) => new Set(prevUsers).add(newUser));
  };

  return (
    <div className={styles.container}>
      <PhoneInput
        value={newUser}
        onChange={(value) => {
          if (!value) return

          if (!isValidPhoneNumber(value)) {
            setError("Invalid Phone Number");
          } else {
            setError("");
          }

          setNewUser(value);
        }}
      />
      {error ? <span className={styles.error}>{error}</span> : ""}
      <button className={styles.btnOpen} onClick={handleAddNewUser}>
        Add new User
      </button>
    </div>
  );
}

export default AddNewUser;
