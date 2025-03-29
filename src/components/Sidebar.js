import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <>
      <h2>Finance</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={styles.item}>
          <Link to="/transactions">Transações</Link>
        </li>
        <li className={styles.item}>Budget</li>
        <li className={styles.item}>Settings</li>
      </ul>
    </>
  );
}
