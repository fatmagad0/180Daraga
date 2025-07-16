import BlogCard from "../components/BlogCard";
import blogs from "../blogs";
import ai from "../assets/ai.jpg";
import Hero from "../components/Hero";

function Blogs() {
  return (
    <div>
      <Hero
        image={ai}
        alt="AI Hero"
        title="Our Blogs"
        subtitle="Explore the latest in AI, Data, and more"
        height="h-64"
      />
      <div className="flex flex-wrap gap-6 justify-center p-6">
        {blogs.map((blog, idx) => (
          <BlogCard
            key={idx}
            img={blog.img}
            title={blog.title}
            date={blog.date}
            to={`/blogs/${blog.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
