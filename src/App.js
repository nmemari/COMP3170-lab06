import "./styles.css";
import PostList from "./components/PostList";

export default function App() {
  return (
    <div className="App">
      <h1>Recent Posts</h1>
      <PostList />
    </div>
  );
}
