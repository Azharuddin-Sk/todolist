import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <p className={styles.welcome}>
      Currently, there are no items in your ToDoList.
    </p>
  );
};

export default WelcomeMessage;
