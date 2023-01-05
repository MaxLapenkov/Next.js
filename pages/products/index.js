import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

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
    const responce = await fetch(`${process.env.API_URL}/products`);
    const products = (await responce?.json()) ?? [];
    return {
      products,
    };
  } catch (error) {
    return [];
  }
};
