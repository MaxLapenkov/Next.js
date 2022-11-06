import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function About() {
  const linkClickHandler = () => {
    Router.push("/");
  };
  return (
    <MainLayout>
      <h1>About Page</h1>
      <button onClick={linkClickHandler}>Go Home</button>
    </MainLayout>
  );
}
