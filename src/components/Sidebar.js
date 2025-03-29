import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <>
      <h2>Finanças</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={styles.item}>
          <Link to="/transacoes">Transações</Link>
        </li>
        <li className={styles.item}>
          <Link to="/categorias">Categorias</Link>
        </li>
        <li className={styles.item}>
          <Link to="/configuracoes">Configurações</Link>
        </li>
      </ul>
    </>
  );
}
