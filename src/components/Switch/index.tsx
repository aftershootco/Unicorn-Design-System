import clsx from "clsx";
import React, { useCallback, useState } from "react";
import styles from "./styles.module.scss";

export interface SwitchProps {
  defaultValue?: boolean;
  onChange: (e: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ defaultValue = false, onChange }) => {
  const [state, setState] = useState(defaultValue);
  const onClick = useCallback(() => {
    setState((state) => {
      onChange(!state);
      return !state;
    });
  }, [onChange, setState]);

  return (
    <label
      className={clsx(styles.switch, { [styles.active]: state })}
      onClick={onClick}
    >
      <span className={clsx(styles.round, styles.slider)}></span>
    </label>
  );
};

export default Switch;
