import styles from "./InputAuth.module.css";

interface InputAuthProps<T> {
  label: string;
  name: keyof T;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<T>>
}

function InputAuth<T>({ label, name, value, setValue }: InputAuthProps<T>) {
  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <div className={styles.container}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        className={styles.input}
        type="text"
        name={String(name)}
        value={value}
        onChange={(e) => handleChangeData(e)}
      />
    </div>
  );
}

export default InputAuth;
