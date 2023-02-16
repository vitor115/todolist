import styles from "./EmptyTask.module.css";
import { ClipboardText } from "phosphor-react";

export function EmptyTask() {
  return (
    <div className={styles.container}>
      <ClipboardText size={50} />
      <strong>Você ainda não tem tarefas cadastradas </strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
