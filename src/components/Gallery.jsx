
function Gallery() {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="/img1.jpg" alt="event" className="w-full h-64 object-cover" />
        <img src="/img2.jpg" alt="event" className="w-full h-64 object-cover" />
        <img src="/img3.jpg" alt="event" className="w-full h-64 object-cover" />
        <img src="/img4.jpg" alt="event" className="w-full h-64 object-cover" />
        <img src="/img5.jpg" alt="event" className="w-full h-64 object-cover" />
        <img src="/img6.jpg" alt="event" className="w-full h-64 object-cover" />
      </div>
    </section>
  );
}

export default Gallery;
