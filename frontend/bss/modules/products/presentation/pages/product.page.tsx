import CardComponent from "../components/card.component";
import styles from "./product.page.module.scss";

const ProductPage = () => {
  return (
    <div className = {styles.container}>
      <CardComponent />
    </div>
  );
};

export default ProductPage;
