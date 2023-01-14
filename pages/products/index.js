import { MainLayout } from "../../components/MainLayout";
import { collection, getDocs } from "firebase/firestore/lite";
import { firestore } from "../../firebase";

import { ProductCard } from "../../components/ProductCard";
import styles from "../../styles/recipeList.module.scss";

export default function Products({ products }) {
  return (
    <MainLayout>
      <h1>Сезонные продукты</h1>
      <ul className={styles.list}>
        {products?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Products.getInitialProps = async () => {
  try {
    const productsCol = collection(firestore, "products");
    const productsnapshot = await getDocs(productsCol);
    const products = productsnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return {
      products,
    };
  } catch (error) {
    return {};
  }
};
