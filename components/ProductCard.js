import styles from "../styles/productCard.module.scss";

export function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={`Изображение ${product.title}`}></img>
      <h4>{product.name}</h4>
    </div>
  );
}
