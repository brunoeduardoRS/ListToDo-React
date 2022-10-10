import styles from "./CheckBox.module.css";
interface PropsChecked {
  checked: boolean;
}
export function CheckBox({ checked }: PropsChecked) {
  const isChecked = false;
  const countCheck = 0;
  function isMarked() {
    if (isChecked === false) {
    }
  }
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" />
    </div>
  );
}
