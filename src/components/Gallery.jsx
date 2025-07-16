import home1 from "../assets/gallery/home1.jpeg";
import home2 from "../assets/gallery/home2.jpg";
import home3 from "../assets/gallery/home3.jpeg";
import home4 from "../assets/gallery/home4.jpg";
import home5 from "../assets/gallery/home5.jpeg";
import home6 from "../assets/gallery/home6.jpg";
import home7 from "../assets/gallery/home7.jpeg";
import home8 from "../assets/gallery/home8.jpeg";

function Gallery() {
  return (
    <section className="py-1 px-1 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
        <img src={home1} alt="home1" className="w-full h-48 object-cover " />
        <img src={home2} alt="home2" className="w-full h-48 object-cover" />
        <img src={home3} alt="home3" className="w-full h-48 object-cover" />
        <img src={home4} alt="home4" className="w-full h-48 object-cover" />
        <img src={home5} alt="home5" className="w-full h-48 object-cover" />
        <img src={home6} alt="home6" className="w-full h-48 object-cover" />
        <img src={home7} alt="home7" className="w-full h-48 object-cover" />
        <img src={home8} alt="home8" className="w-full h-48 object-cover" />

      </div>
    </section>
  );
}

export default Gallery;
