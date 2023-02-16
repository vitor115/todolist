import { useState } from "react";
import styles from "./Checkbox.module.css";
import { Check } from "phosphor-react";

interface CheckboxProps {
  check: boolean;
  handleFunction: (action: string) => void;
}

export function Checkbox({ check, handleFunction }: CheckboxProps) {
  const [checked, setChecked] = useState(check);
  function handleOnClick() {
    setChecked(!checked);
    handleFunction("check");
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.check}
        style={{
          transition: "0.3s all",
          backgroundColor: checked ? "var(--purple-dark)" : "",
        }}
        onClick={handleOnClick}
      >
        {checked ? <Check size={12} /> : ""}
      </div>
    </div>
  );
}
