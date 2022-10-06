import styles from "./Input.module.css";
import { CreateButton } from "./CreateButton";
export function Input() {
  return (
    <div className={styles.input}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <CreateButton />
    </div>
  );
}
