import { Checkbox } from "./Checkbox";
import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

export interface TaskProps {
  id: number;
  content: string;
  checked: boolean;
  handleFunction?: (id: number) => void;
}

export function Task({ content, checked, handleFunction, id }: TaskProps) {
  function handleFunctions() {
    handleFunction ? handleFunction(id) : "";
  }
  return (
    <section>
      <div className={styles.task}>
        <Checkbox check={checked} handleFunction={handleFunctions} />

        <p>{content}</p>
        <Trash size={20} />
      </div>
    </section>
  );
}
