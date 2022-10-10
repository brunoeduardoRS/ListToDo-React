import styles from "./Task.module.css";
import { CheckBox } from "./CheckBox";
import { useState } from "react";
import { Trash } from "phosphor-react";
interface PropsTask {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: PropsTask) {
  const [taskCount, setTaskCount] = useState(0);
  const [task, setTask] = useState("");
  function handleDeleteTask() {
    onDeleteTask(content);
  }
  return (
    <div>
      <div className={styles.taskToDo}>
        <div className={styles.task}>
          <CheckBox checked />
          <label htmlFor="task">{content}</label>
          <div className={styles.delete}>
            <button className={styles.deleteButton} onClick={handleDeleteTask}>
              <Trash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
