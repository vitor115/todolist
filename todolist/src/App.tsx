import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import { TaskList } from "./components/TasksList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [content, setContent] = useState("");
  const [newTask, setNewTask] = useState({});

  function handleSubmit() {
    setNewTask({
      id: uuidv4(),
      content: content,
      checked: false,
    });
  }

  return (
    <div className={styles.main}>
      <Header />
      <section className={styles.section}>
        <form action="">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Criar
            <PlusCircle />
          </button>
        </form>
        <TaskList newTask={newTask ? newTask : null} />
      </section>
      <footer>Vitor Ravacci @2023</footer>
    </div>
  );
}

export default App;
