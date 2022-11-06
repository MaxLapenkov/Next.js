import { useState, useEffect } from "react";
import Link from "next/link";

import { MainLayout } from "../../components/MainLayout";

export default function Posts({ posts }) {
  return (
    <MainLayout>
      <h1>Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async () => {
  const responce = await fetch(`${process.env.API_URL}/posts`);
  const posts = await responce.json();
  return {
    posts,
  };
};
