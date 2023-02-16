import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import { TaskList } from "./components/TasksList";
import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [content, setContent] = useState("");
  const [newTask, setNewTask] = useState({});
  const isNewTaskEmpty = content.length === 0;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setNewTask({
      id: uuidv4(),
      content: content,
      checked: false,
    });
    setContent("");
  }
  useEffect(() => {
    console.log(isNewTaskEmpty);
  }, [newTask]);
  return (
    <div className={styles.main}>
      <Header />
      <section className={styles.section}>
        <form action="">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isNewTaskEmpty}
          >
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
