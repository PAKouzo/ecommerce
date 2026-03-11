import { Button, Input } from "antd";
import styles from "./input.component.module.scss";

const InputComponent = () => {
  return (
    <div className={styles.container}>
      <Input placeholder="Input your phone number" />
      <Button type="primary">Submit</Button>
    </div>
  );
};

export default InputComponent;
