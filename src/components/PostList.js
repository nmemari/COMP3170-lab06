import { useEffect, useState } from "react";
import Post from "./Post";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const source_url_posts = `https://jsonplaceholder.typicode.com/posts`;
    setLoading(true);

    async function getPosts() {
      const response = await fetch(source_url_posts);
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    }

    setTimeout(() => {
      getPosts();
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })
      )}
    </div>
  );
}
