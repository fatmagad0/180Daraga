function Hero({ image, alt, title, subtitle, height = "h-[60vh]" }) {
  return (
    <div className={`relative w-full ${height}`}>
      {/* Image */}
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">{subtitle}</p>
      </div>
    </div>
  );
}

export default Hero;
