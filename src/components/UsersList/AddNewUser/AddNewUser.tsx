import styles from "./AddNewUser.module.css";
import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input/input";

interface IAddNewUser {
  setUser: React.Dispatch<React.SetStateAction<string[]>>;
}

function AddNewUser({ setUser }: IAddNewUser) {
  const [newUser, setNewUser] = useState<string>('');
  const [error, setError] = useState<string>('')

  const handleAddNewUser = () => {
    if (isValidPhoneNumber(newUser)) {
      setUser((prevUsers) => [...prevUsers, newUser]);
      setError('')
    } else {
      setError('Invalid Phone Number')
    }
  };


  return (
    <div className={styles.container}>
      <PhoneInput value={newUser} onChange={(value) => setNewUser(value || '')}  />
      {error ? <span className={styles.error}>{error}</span> : ''}
      <button className={styles.btnOpen} onClick={handleAddNewUser}>
        Add new User
      </button>
    </div>
  );
}

export default AddNewUser;
