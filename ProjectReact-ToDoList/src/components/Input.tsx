import styles from "./Input.module.css";
import { CreateButton } from "./CreateButton";
import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";
import { Task } from "./Task";
interface PropsInput {
  content: string;
}
export function Input() {
  const [tasks, setTask] = useState([""]);
  const [newTask, setNewTask] = useState("");
  const isNewTaskEmpty = newTask.length === 0;
  const totalTasks = tasks.length;

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTask([...tasks, newTask]);
    setNewTask("");
    console.log("teste adicionando");
  }
  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task != taskToDelete;
    });

    setTask(tasksWithoutDeletedOne);
  }
  return (
    <div>
      <form action="" onSubmit={handleCreateNewTask} className={styles.input}>
        <input
          type="text"
          onChange={handleNewTaskChange}
          required
          name=""
          placeholder="Adicione uma nova tarefa"
          value={newTask}
        />
        <CreateButton disabled={isNewTaskEmpty} />
      </form>
      <div className={styles.taskContent}>
        <div className={styles.info}>
          <p>Tarefas criadas</p>
          <span>{totalTasks}</span>
        </div>
        <div className={styles.done}>
          <p>Concuídas</p>
          <span>
            {} de {totalTasks}
          </span>
        </div>
      </div>
      <div className={styles.task}>
        {tasks.map((task) => {
          return <Task onDeleteTask={deleteTask} content={task} />;
        })}
      </div>
    </div>
  );
}
