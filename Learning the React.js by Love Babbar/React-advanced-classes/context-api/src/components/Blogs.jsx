import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";

const Blogs = () => {
  // Consume the context
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 font-medium">No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-6">
            <p className="font-extrabold text-xl text-gray-800 mb-2">
              {post.title}
            </p>

            <p className="italic text-gray-600 mb-2">
              By{" "}
              <span className="font-semibold text-gray-700">{post.author}</span>{" "}
              on{" "}
              <span className="font-medium text-gray-700">{post.category}</span>
            </p>

            <p className="text-sm text-gray-500 mb-4">Posted on {post.date}</p>

            <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 text-sm font-medium px-2 py-1 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
