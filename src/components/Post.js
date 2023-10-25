import { useState, useEffect } from "react";

export default function Post({ post }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const source_url_users = `https://jsonplaceholder.typicode.com/users`;

    async function getUsers() {
      const response = await fetch(source_url_users);
      const data = await response.json();
      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <div className="author">
        {users.map((user) => {
          if (user.id === post.userId) {
            return (
              <div className="author_tag">
                <p key={user.id}>
                  By: <a href={user.website}>{user.name}</a>
                </p>
                <p>Company: {user.company.name}</p>
                <p>Contact: {user.phone}</p>
              </div>
            );
          }
        })}
        <p>{post.body}</p>
      </div>
    </div>
  );
}
