import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../component/PostCard";

const Search = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      // console.log("API RESPONSE", response.data);
      setPosts(response.data); // This is the data from the API
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!posts.length) {
      fetchData();
    }
  }, [posts]);

  console.log("posts", posts);

  return (
    <div>
      <div>
        <button onClick={() => setPosts([])}>Refresh</button>
      </div>

      <div>
        {posts.length
          ? posts.map((post) => (
              <PostCard key={post.id} title={post.title} body={post.body} />
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default Search;
