import styles from "./InputAuth.module.css";

interface InputAuthProps {
  label: string;
}

function InputAuth({ label }: InputAuthProps) {
  return (
    <div className={styles.container}>
      {label && <span className={styles.label}>{label}</span>}
      <input className={styles.input} type="text" />
    </div>
  );
}

export default InputAuth;
