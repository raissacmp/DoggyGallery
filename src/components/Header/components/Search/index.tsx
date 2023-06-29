import styles from "./index.module.css";

export default function Search() {
  return (
    <section className={styles.mainSearch}>
      <input
        className={styles.input}
        placeholder="Digite o doguinho que você procura 💜"
      />
    </section>
  );
}
