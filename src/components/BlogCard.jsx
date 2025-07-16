import { Link } from "react-router-dom";

function BlogCard({ img, title, date, to }) {
  return (
    <Link to={to} className="block max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-base">{date}</p>
      </div>
    </Link>
  );
}

export default BlogCard; 