import { useParams } from "react-router-dom";
import blogs from "../blogs";

function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div className="p-6 text-center text-2xl">404 Blog Not Found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img src={blog.img} alt={blog.title} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-600 mb-4">{blog.date}</p>
      <div className="text-lg">{blog.content}</div>
    </div>
  );
}

export default BlogDetail; 