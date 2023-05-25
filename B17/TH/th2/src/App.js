import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function App() {
  const [post, setPost] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/posts");
        setPost(result.data);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div>
      <div>This is posts:</div>
      {post?.map((p) => {
        return <div key={p.id}>{p?.title}</div>;
      })}
    </div>
  );
}
