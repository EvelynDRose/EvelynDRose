import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";
import ReactMarkdown from "react-markdown";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogs.find((b) => b.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{post.date}</p>

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-10">
          <Link
            to="/blog"
            className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
