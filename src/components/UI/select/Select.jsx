import styles from "./Select.module.css";

export const Select = (props) => {
  return (
    <select
      onChange={(e) => props.callback(e.target.value)}
      className={styles.selector}
    >
      {props.options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        );
      })}
    </select>
  );
};
