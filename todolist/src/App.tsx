import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import { TaskList } from "./components/TasksList";
import { useState } from "react";
import { Task, TaskProps } from "./components/Task";

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <section className={styles.section}>
        <form action="">
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar
            <PlusCircle />
          </button>
        </form>
        <TaskList />
      </section>
    </div>
  );
}

export default App;
