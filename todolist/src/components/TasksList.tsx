import { useEffect, useState } from "react";
import { Task, TaskProps } from "./Task";
import styles from "./TasksList.module.css";
import { v4 as uuidv4 } from "uuid";

export function TaskList(props: any) {
  const [taskList, setTaskList] = useState<TaskProps[]>([
    {
      id: uuidv4(),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptatibus aliquid eum",
      checked: false,
    },
    {
      id: uuidv4(),
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
  function onNewTask(newTask: TaskProps) {
    if (
      newTask !== null &&
      newTask !== undefined &&
      Object.keys(newTask).length !== 0
    ) {
      setTaskList([...taskList, newTask]);
    }
  }

  function onDeleteTask(id: string): void {
    const taskWithoutInteractedTask = taskList.filter((task) => task.id != id);
    setTaskList(taskWithoutInteractedTask);
  }

  function onCheckInteraction(id: string) {
    const taskToBeUpdated = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      } else {
        return task;
      }
    });
    setTaskList(taskToBeUpdated);
  }
  function handleTaskInteraction(id: string, action?: string): void {
    if (action === "delete") {
      onDeleteTask(id);
    } else if (action === "check") {
      onCheckInteraction(id);
    } else {
      console.error("error 404");
    }
  }

  useEffect(() => {
    onNewTask(props.newTask);
  }, [props.newTask]);

  useEffect(() => {}, []);

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
              handleFunction={handleTaskInteraction}
            />
          );
        })}
      </section>
    </section>
  );
}
