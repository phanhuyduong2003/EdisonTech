import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form>
        <p className={styles.fieldTitle}>Email: </p>
        <input type="email" name="email" className={ styles.input} />
        <p className={styles.fieldTitle}>Password: </p>
        <input type="password" name="password" className={styles.input} />
        <br />
        <label htmlFor=""><input type="checkbox" name="isRead" className={styles.checkbox} /> I read and accept the privacy policy: </label>
        <br />
        <button className={styles.btnSubmit}>Submit</button>
    </form>
    </div>
  );
}

export default App;
