import { Greet } from "@components/Greet";
import styles from "./App.module.css";

const App = () => {
  return (
    <div class={styles.App}>
      <header>Hello Solid!</header>
      <Greet />
    </div>
  );
};

export default App;
