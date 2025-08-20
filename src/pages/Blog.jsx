import React from "react";
import { BookOpen, Search, Database } from "lucide-react";
import { Link } from "react-router-dom";  // ✅ import Link

const posts = [
  {
    id: 1,
    title: "Beginner's Guide to Python for Data Science",
    description: "Learn how to use Python for data analysis, visualization, and machine learning.",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    bgColor: "bg-red-500",
  },
  {
    id: 2,
    title: "Exploratory Data Analysis on Titanic Dataset",
    description: "Step-by-step EDA using Pandas, Seaborn, and Matplotlib.",
    icon: <Search className="w-8 h-8 text-white" />,
    bgColor: "bg-gray-900",
  },
  {
    id: 3,
    title: "Data is the new oil",
    description: "Why data has become the most valuable resource in the digital age.",
    icon: <Database className="w-8 h-8 text-white" />,
    bgColor: "bg-gray-900",
  },
];

const Post = () => {
  return (
    <section id="blog" className="bg-black min-h-screen py-16">
      <h2 className="text-center text-3xl font-bold text-white mb-10">
        Blog Section
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`${post.bgColor} rounded-xl p-6 shadow-md flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            {/* Icon */}
            <div className="mb-4">{post.icon}</div>

            {/* Title */}
            <h3 className="text-white text-lg font-semibold mb-2">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-4">{post.description}</p>

            {/* ✅ Read more with router */}
            <Link
              to={`/blog/${post.id}`}
              className="text-sm text-white hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Post;
