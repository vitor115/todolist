import { Checkbox } from "./Checkbox";
import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

export interface TaskProps {
  id: string;
  content: string;
  checked: boolean;
  handleFunction?: (id: string, action?: string) => void;
}

export function Task({ content, checked, handleFunction, id }: TaskProps) {
  function handleFunctions(action: string) {
    handleFunction ? handleFunction(id, action) : "";
  }
  function handleOnClickDelete() {
    handleFunction ? handleFunction(id, "delete") : "";
  }
  return (
    <section>
      <div className={styles.task}>
        <Checkbox check={checked} handleFunction={handleFunctions} />

        <p
          style={{
            textDecoration: checked ? "line-through" : "none",
            opacity: checked ? "0.5" : "1",
          }}
        >
          {content}
        </p>
        <Trash size={20} onClick={handleOnClickDelete} />
      </div>
    </section>
  );
}
