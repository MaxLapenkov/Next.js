import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const getPost = async (id) => {
  const responce = await fetch(`${process.env.API_URL}/posts/${id}`);
  const post = await responce.json();
  return post;
};

export default function Post({ post: serverPost }) {
  const router = useRouter();
  const [post, setPost] = useState(serverPost);

  useEffect(() => {
    if (!serverPost) {
      getPost(router.query.id).then((result) => setPost(result));
    }
  }, [serverPost]);

  if (!post) return <p>Loading...</p>;
  return (
    <>
      <h1>{`Post ${router.query.id}`}</h1>
      <p>{post.title}</p>
    </>
  );
}

Post.getInitialProps = async ({ query }) => {
  const post = await getPost(query.id);
  return {
    post,
  };
};
