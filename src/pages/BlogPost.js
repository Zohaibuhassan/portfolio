import React from "react";
import { useParams, Link } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  // Example blog content
  const posts = {
    1: {
      title: "Beginner's Guide to Python for Data Science",
      content: "This is a detailed article about React basics...",
    },
    2: {
      title: "Exploratory Data Analysis on Titanic Dataset",
      content: "Here we cover ES6 features like arrow functions, promises...",
    },
    3: {
      title: "Data is the new oil",
      content: "Data science involves analyzing data to extract insights...",
    },
  };

  const post = posts[id];

  if (!post) {
    return <h2 className="text-center mt-20 text-2xl">Post not found</h2>;
  }

  return (
    <div className="px-8 py-16 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed mb-8">{post.content}</p>
      
      {/* ✅ Back to Blog section */}
      <Link
        to="/#blog"
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
      >
        ← Back to Blog
      </Link>
    </div>
  );
};

export default BlogPost;
