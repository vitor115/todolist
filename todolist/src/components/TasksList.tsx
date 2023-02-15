import { useEffect, useState } from "react";
import { Task, TaskProps } from "./Task";
import styles from "./TasksList.module.css";

export function TaskList() {
  const [taskList, setTaskList] = useState<TaskProps[]>([
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptatibus aliquid eum",
      checked: true,
    },
    {
      id: 2,
      content:
        "Vitor, consectetur adipisicing elit. Illum voluptatibus aliquid eum",
      checked: false,
    },
  ]);

  function countCompletedTasks() {
    const completedTasks = taskList.filter((task) => {
      return task.checked == true;
    });
    return completedTasks.length;
  }

  //VISITAR AMANHA NAO ENTENDI
  function handleOnCheck(id: number): void {
    const task = taskList;
    console.log(task);
    task[id - 1].checked = !task[id - 1].checked;
    setTaskList(task);
    console.log(taskList);
  }
  /* useEffect(() => {}, [countCompletedTasks]); */
  return (
    <section>
      <header>
        <div className={styles.taskCount}>
          <p>Tarefas criadas</p>
          <div>{taskList.length}</div>
        </div>
        <div className={styles.taskConcluded}>
          Concluídas
          <div>{countCompletedTasks()}</div>
        </div>
      </header>
      <hr />
      <section className={styles.taskList}>
        {taskList.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              checked={task.checked}
              handleFunction={handleOnCheck}
            />
          );
        })}
      </section>
    </section>
  );
}
